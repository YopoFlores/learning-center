import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const categoriesEndpointPath = import.meta.env.VITE_CATEGORIES_ENDPOINT_PATH;
const tutorialsEndpointPath     = import.meta.env.VITE_TUTORIALS_ENDPOINT_PATH;

/**
 * Infrastructure gateway for the Publishing bounded-context endpoints.
 * Provides CRUD operations for categories and tutorials via REST.
 *
 * @class PublishingApi
 * @extends BaseApi
 */
export class PublishingApi extends BaseApi {
    #categoriesEndpoint;
    #tutorialsEndpoint;

    /** Creates endpoint clients for categories and tutorials. */
    constructor() {
        super();
        this.#categoriesEndpoint = new BaseEndpoint(this, categoriesEndpointPath);
        this.#tutorialsEndpoint = new BaseEndpoint(this, tutorialsEndpointPath);
    }

    /**
     * Fetches all category resources.
     * @returns {Promise<import('axios').AxiosResponse<Array<Object>|Object>>} HTTP response with category resources.
     */
    getCategories() {
        return this.#categoriesEndpoint.getAll();
    }

    /**
     * Fetches a single category resource by identifier.
     * @param {number|string} id - Category identifier.
     * @returns {Promise<import('axios').AxiosResponse<Object>>} HTTP response with the category resource.
     */
    getCategoryById(id) {
        return this.#categoriesEndpoint.getById(id);
    }

    /**
     * Creates a new category resource.
     * @param {Object} resource - Category resource payload to persist.
     * @returns {Promise<import('axios').AxiosResponse<Object>>} HTTP response with the created category resource.
     */
    createCategory(resource) {
        return this.#categoriesEndpoint.create(resource);
    }

    /**
     * Updates an existing category resource.
     * @param {Object} resource - Category resource payload with updated data (must include id).
     * @returns {Promise<import('axios').AxiosResponse<Object>>} HTTP response with the updated category resource.
     */
    updateCategory(resource) {
        return this.#categoriesEndpoint.update(resource.id, resource);
    }

    /**
     * Deletes a category resource by identifier.
     * @param {number|string} id - Category identifier to remove.
     * @returns {Promise<import('axios').AxiosResponse<void>>} HTTP response confirming deletion.
     */
    deleteCategory(id) {
        return this.#categoriesEndpoint.delete(id);
    }

    /**
     * Fetches all tutorial resources.
     * @returns {Promise<import('axios').AxiosResponse<Array<Object>|Object>>} HTTP response with tutorial resources.
     */
    getTutorials() {
        return this.#tutorialsEndpoint.getAll();
    }

    /**
     * Fetches a single tutorial resource by identifier.
     * @param {number|string} id - Tutorial identifier.
     * @returns {Promise<import('axios').AxiosResponse<Object>>} HTTP response with the tutorial resource.
     */
    getTutorialById(id) {
        return this.#tutorialsEndpoint.getById(id);
    }

    /**
     * Creates a new tutorial resource.
     * @param {Object} resource - Tutorial resource payload to persist.
     * @returns {Promise<import('axios').AxiosResponse<Object>>} HTTP response with the created tutorial resource.
     */
    createTutorial(resource) {
        return this.#tutorialsEndpoint.create(resource);
    }

    /**
     * Updates an existing tutorial resource.
     * @param {Object} resource - Tutorial resource payload with updated data (must include id).
     * @returns {Promise<import('axios').AxiosResponse<Object>>} HTTP response with the updated tutorial resource.
     */
    updateTutorial(resource) {
        return this.#tutorialsEndpoint.update(resource.id, resource);
    }

    /**
     * Deletes a tutorial resource by identifier.
     * @param {number|string} id - Tutorial identifier to remove.
     * @returns {Promise<import('axios').AxiosResponse<void>>} HTTP response confirming deletion.
     */
    deleteTutorial(id) {
        return this.#tutorialsEndpoint.delete(id);
    }
}