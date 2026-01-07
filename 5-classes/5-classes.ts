class Map {
    private buckets: { key: any; value: any }[][] = [];

    constructor(private bucketSize: number = 31) {
    }

    get size(): number {
        let count = 0;
        for (const bucket of this.buckets) {
            if (bucket) {
                count += bucket.length;
            }
        }
        return count;
    }

    set(key: any, value: any): void {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        for (const entry of this.buckets[index]) {
            if (entry.key === key) {
                entry.value = value;
                return;
            }
        }
        this.buckets[index].push({key, value});
    }

    get(key: any): any | undefined {
        const index = this.hash(key);
        if (this.buckets[index]) {
            for (const entry of this.buckets[index]) {
                if (entry.key === key) {
                    return entry.value;
                }
            }
        }
        return undefined;
    }

    delete(key: any): boolean {
        const index = this.hash(key);
        if (this.buckets[index] && this.buckets[index].length > 0) {
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (this.buckets[index][i].key === key) {
                    this.buckets[index].splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    clear(): void {
        this.buckets = [];
    }

    private hash(key: any): number {
        let hash = 0;
        if (typeof key === 'string') {
            for (let i = 0, len = key.length; i < len; i++) {
                hash = ((hash << 5) - hash) + key.charCodeAt(i);
                hash |= 0; // Convert to 32bit integer
            }
        } else if (typeof key === 'number') {
            hash = key;
        } else {
            throw new Error('Unsupported type');
        }
        return Math.abs(hash % this.bucketSize);
    }
}