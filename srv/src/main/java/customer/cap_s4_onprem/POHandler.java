package customer.cap_s4_onprem;

import com.sap.cds.services.handler.annotations.ServiceName;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.Result;
import com.sap.cds.ql.cqn.CqnSelect;
import com.sap.cds.reflect.CdsService;
import com.sap.cds.services.cds.CdsReadEventContext;
import com.sap.cds.services.cds.RemoteService;
import com.sap.cloud.sdk.cloudplatform.connectivity.DestinationAccessor;
import com.sap.cloud.sdk.cloudplatform.connectivity.HttpDestination;
import com.sap.cloud.sdk.cloudplatform.connectivity.HttpClientAccessor;

import org.apache.http.client.HttpClient;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.*;

import com.fasterxml.jackson.databind.ObjectMapper;


@Component
@ServiceName("POService")
public class POHandler implements EventHandler {

    @Autowired
    @Qualifier("API_PURCHASEORDER_PROCESS_SRV")
    RemoteService remote;

     @On(event = "READ", entity = "POService.PO")
    public void onRead(CdsReadEventContext context) {

        CqnSelect query = context.getCqn();

        Result result = remote.run(query);

        context.setResult(result);
    }
}

// @Component
// @ServiceName("POService")
// public class POHandler implements EventHandler {

//     @On(event = "READ", entity = "POService.PO")

//     public void onReadPO(CdsReadEventContext context) {

//         List<Map<String, Object>> finalResult = new ArrayList<>();

//         try {
//             System.out.println("🔥 PO Handler Triggered");

//             // ✅ Get destination
//             HttpDestination destination = DestinationAccessor
//                     .getDestination("S4H")
//                     .asHttp();

//             // ✅ Create HTTP client
//             HttpClient httpClient = HttpClientAccessor.getHttpClient(destination);

//             // ✅ External S4 URL (relative to destination)
//             String url = "/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem?$top=20";

//             HttpGet request = new HttpGet(url);
//             request.addHeader("Accept", "application/json");
//             request.addHeader("sap-client", "100");

//             // ✅ Execute call
//             HttpResponse response = httpClient.execute(request);

//             int statusCode = response.getStatusLine().getStatusCode();
//             System.out.println("🔥 STATUS: " + statusCode);

//             if (statusCode != 200) {
//                 System.out.println("❌ Failed to fetch data from S4");
//                 context.setResult(finalResult);
//                 return;
//             }

//             String json = EntityUtils.toString(response.getEntity());
//             System.out.println("🔥 RAW RESPONSE: " + json);

//             // ✅ Parse JSON
//             ObjectMapper mapper = new ObjectMapper();
//             Map<String, Object> body = mapper.readValue(json, Map.class);

//             if (body == null || !body.containsKey("d")) {
//                 context.setResult(finalResult);
//                 return;
//             }

//             Map<String, Object> d = (Map<String, Object>) body.get("d");

//             if (d == null || !d.containsKey("results")) {
//                 context.setResult(finalResult);
//                 return;
//             }

//             List<Map<String, Object>> results =
//                     (List<Map<String, Object>>) d.get("results");

//             if (results == null || results.isEmpty()) {
//                 context.setResult(finalResult);
//                 return;
//             }

//             // ✅ Transform data
//             for (Map<String, Object> item : results) {

//                 Map<String, Object> row = new HashMap<>(item);

//                 // Remove unwanted fields
//                 row.remove("__metadata");
//                 row.keySet().removeIf(key -> key.startsWith("to_"));

//                 // Add mandatory CAP key
//                 row.put("ID", UUID.randomUUID().toString());

//                 finalResult.add(row);
//             }

//             // ✅ Send response back to CAP
//             context.setResult(finalResult);

//         } catch (Exception e) {
//             e.printStackTrace();
//             context.setResult(finalResult);
//         }
//     }
// }
