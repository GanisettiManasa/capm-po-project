using { API_PURCHASEORDER_PROCESS_SRV as ext } from './external/API_PURCHASEORDER_PROCESS_SRV';

service POService {
    entity POHeader as projection on ext.A_PurchaseOrder;
    entity POItem as projection on ext.A_PurchaseOrderItem;
}