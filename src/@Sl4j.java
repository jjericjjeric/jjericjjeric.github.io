@Sl4j
@Setter
@Service
@ConfigurationProperties(prefix="usaa.external-api")
public class RestClient {
	private RestTemplate restTemplate;
	private String bankCoreApi;
	private String bankCoreApiKey;
	private String autoInquiryApi;
	private String autoInquiryVehiclesApi;
	private String idClaimServiceApi;

	@Autowired
	public RestClient(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	public List<CLAccount> getBankLoanAccountInfo(String memberId) {
		HttpHeaders headers = getIdClaim(memberId);
		headers.add("api-key", bankCoreApiKey);

		HttpEntity request = new HttpEntity(headers);
		ResponseEntity<List<CLAccount>> response = restTemplate.exchange(bankCoreApi, HttpMethod.GET, request,
			new ParameterizedTypeReference<List<CLAccount>>(){

			});
		if (response.getStatusCode().is2xxxSuccessful()) {
			return response.getBody();
		}
		return null;
	}

	public List<PolicyDetailsDTO> getPolicyIds(String memberNumber) {
		HttpHeaders headers = getIdClaim(memberNumber);
		HttpEntity request = new HttpEntity(headers);
		ResponseEntity<List<PolicyDetailsDTO>> response = restTemplate.exchange(autoInquiryApi, HttpMethod.GET, request,
			new ParameterizedTypeReference<List<PolicyDetailsDTO>>() {

			});
		if (response != null && response.getStatusCode().is2xxxSuccessful()) {
			return response.getBody();
		}
		return Collections.emptyList();
	}

	public List<VehicleResponse> retrieveVehiclesForPolicy(String policyId, String memberNumber) {
		HttpHeaders headers = getIdCLaim(memberNumber);
		HttpEntity request = new HttpEntity(headers);
		String updatedAutoInqVehiclesApi = autoInquiryVechiclesApi.replace("policy-id", policyId);
		ResponseEntiry<List<VehicleResponse>> response = restTemplate.exchage(updatedAutoInqVehiclesApi, HttpMethod.GET, request,
			new ParameterizedTypeReference<List<VehicleResponse>>(){

			})
		if (response != null && response.getStatusCode().is2xxxSuccessful()) {
			return reponse.getBody();
		}
	}

	private HttpHeaders setupHeader() {
		HttpHeaders headers = new HttpHeaders();
		headers.add("accept", "application/json");
		return headers;
	}

	public HttpHeaders getIdClaim(String memberId) {
		HttpHeaders httpHeaders = setupHeader();
		HttpEntity entity = new HttpEntity(httpHeaders);

		ResponseEntity<IdClaimModel> idClaimResponse = restTemplate.exchange(idClaimServiceApi + memberId, HttpMethod.GET, entity, IdClaimModel.class);

		HttpHeaders headers = new HttpHeaders();

		if(idClaimResponse.getStatusCode().is2xxxSuccessful() && null != idClaimResponse.getBody()) {
			String idClaim = idClaimResponse.getBody().getIdCLaim();
			headers.add("id-claim", idClaim)
		}
	}
}