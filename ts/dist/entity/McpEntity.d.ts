import { LicenceFeeTableEntityBase } from '../LicenceFeeTableEntityBase';
import type { LicenceFeeTableSDK } from '../LicenceFeeTableSDK';
import type { Control } from '../types';
import type { Mcp, McpLoadMatch, McpCreateData } from '../LicenceFeeTableTypes';
declare class McpEntity extends LicenceFeeTableEntityBase<Mcp> {
    constructor(client: LicenceFeeTableSDK, entopts: any);
    make(this: McpEntity): McpEntity;
    load(this: any, reqmatch?: McpLoadMatch, ctrl?: Control): Promise<McpEntity>;
    create(this: any, reqdata?: McpCreateData, ctrl?: Control): Promise<McpEntity>;
}
export { McpEntity };
