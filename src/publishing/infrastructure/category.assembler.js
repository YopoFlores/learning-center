import {Category} from "../domain/model/category.entity.js";

/**
 * Maps Publishing infrastructure resources into domain entities and vice versa.
 * Belongs to the infrastructure layer of the Publishing bounded context.
 *
 * @class CategoryAssembler
 */
export class CategoryAssembler {
    /**
     * Converts a raw category resource payload into a {@link Category} entity.
     *
     * @param {Object} resource - Category resource payload received from the API.
     * @param {number|string} resource.id - Category identifier.
     * @param {string} resource.name - Category name.
     * @returns {Category} Mapped category entity.
     */
    static toEntityFromResource(resource) {
        return new Category({...resource});
    }

    /**
     * Parses an HTTP response containing category resources and maps them into entities.
     *
     * @param {import('axios').AxiosResponse<Array<Object>|Object>} response - HTTP response with category resources.
     * @returns {Category[]} Collection of category entities, or an empty array on failure.
     */
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status} ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array
        ? response.data :  response.data['categories'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}