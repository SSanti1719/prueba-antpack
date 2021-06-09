import {GeoModel} from 'src/app/models/user/geo.model'
export interface AdressModel{
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: GeoModel
}