export class countryData {
    currency !: string;
    name !: string;
    flag !: string;
    phonecode !: string;
    isoCode !: string
 }

 export class stateData {
    name !: string;
    isoCode !: string;
    countryCode !: string;
 }

 export class cityData {
   name !: string;
   isoCode !: string;
   countryCode !: string;
   stateCode!: string;
}