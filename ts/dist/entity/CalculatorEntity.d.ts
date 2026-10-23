import { LicenceFeeTableEntityBase } from '../LicenceFeeTableEntityBase';
import type { LicenceFeeTableSDK } from '../LicenceFeeTableSDK';
import type { Control } from '../types';
import type { Calculator, CalculatorCreateData } from '../LicenceFeeTableTypes';
declare class CalculatorEntity extends LicenceFeeTableEntityBase<Calculator> {
    constructor(client: LicenceFeeTableSDK, entopts: any);
    make(this: CalculatorEntity): CalculatorEntity;
    create(this: any, reqdata?: CalculatorCreateData, ctrl?: Control): Promise<CalculatorEntity>;
}
export { CalculatorEntity };
