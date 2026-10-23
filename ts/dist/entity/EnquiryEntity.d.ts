import { LicenceFeeTableEntityBase } from '../LicenceFeeTableEntityBase';
import type { LicenceFeeTableSDK } from '../LicenceFeeTableSDK';
import type { Control } from '../types';
import type { Enquiry, EnquiryCreateData } from '../LicenceFeeTableTypes';
declare class EnquiryEntity extends LicenceFeeTableEntityBase<Enquiry> {
    constructor(client: LicenceFeeTableSDK, entopts: any);
    make(this: EnquiryEntity): EnquiryEntity;
    create(this: any, reqdata?: EnquiryCreateData, ctrl?: Control): Promise<EnquiryEntity>;
}
export { EnquiryEntity };
