using { API_PURCHASEORDER_PROCESS_SRV as ext } from './external/API_PURCHASEORDER_PROCESS_SRV';

service POService {
    entity PO as projection on ext.A_PurchaseOrderItem;
}
