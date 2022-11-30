import GDriveApi from '../GDriveApi'
import { fetch } from '../request/Fetcher'
import Uris from '../request/Uris'

export default class About extends GDriveApi {
  get(queryParametersOrFields: object | string) {
    const queryParameters =
      typeof queryParametersOrFields === 'object'
        ? queryParametersOrFields
        : { fields: queryParametersOrFields }

    return fetch(this, Uris.about({ queryParameters }), 'json')
  }
}
