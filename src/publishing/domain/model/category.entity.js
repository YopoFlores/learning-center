/**
 * Category value-carrying entity within the Publishing bounded context.
 * Represents a classification group that tutorials can belong to.
 *
 * @class Category
 */
export class Category {
    /**
     * @param {Object} params - Entity attributes.
     * @param {number|null} [params.id=null] - Unique category identifier (null for unsaved entities).
     * @param {string} [params.name=''] - Human-readable category name.
     */
    constructor({ id = null, name = ''}) {
        this.id = id;
        this.name = name;
    }
}