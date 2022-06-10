"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[56],{75641:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(15007),n(64983)),s=n(91515),i=["components"],m={},d={_frontmatter:m},l=s.Z;function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.mdx)(l,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"token-based-authentication"},"Token-based authentication"),(0,o.mdx)("p",null,"To make a web ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API")," call from a client such as a mobile application, you must supply an ",(0,o.mdx)("em",{parentName:"p"},"access token")," on the call. The token acts like an electronic key that lets you access the API."),(0,o.mdx)("p",null,"Adobe Commerce and Magento Open Source issue the following types of access tokens:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Token type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"Default lifetime"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Integration"),(0,o.mdx)("td",{parentName:"tr",align:null},"The merchant determines which Commerce resources the integration can access."),(0,o.mdx)("td",{parentName:"tr",align:null},"Indefinite. It lasts until it is manually revoked.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Admin"),(0,o.mdx)("td",{parentName:"tr",align:null},"The merchant determines which Commerce resources an admin user has access to."),(0,o.mdx)("td",{parentName:"tr",align:null},"4 hours")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,o.mdx)("td",{parentName:"tr",align:null},"Commerce grants access to resources with the ",(0,o.mdx)("inlineCode",{parentName:"td"},"anonymous")," or ",(0,o.mdx)("inlineCode",{parentName:"td"},"self")," permission. Merchants cannot edit these settings."),(0,o.mdx)("td",{parentName:"tr",align:null},"1 hour")))),(0,o.mdx)("h2",{id:"integration-tokens"},"Integration tokens"),(0,o.mdx)("p",null,"When a merchant creates and activates an integration, Commerce generates a consumer key, consumer secret, access token, and access token secret. All of these entities are used for ",(0,o.mdx)("a",{parentName:"p",href:"./gs-authentication-oauth.md"},"OAuth-based authentication"),"."),(0,o.mdx)("p",null,"In previous versions of Commerce, the access token could be used on its own for token-based authentication. This behavior has been disabled by default due to the security implications of a never-expiring access token. Namely, if the access token is compromised it provides undetected persistent access to a store."),(0,o.mdx)("p",null,"However, while it is not recommended, this behavior can be restored in the Admin by setting the ",(0,o.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,o.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,o.mdx)("strong",{parentName:"p"},"Services")," > ",(0,o.mdx)("strong",{parentName:"p"},"OAuth")," > ",(0,o.mdx)("strong",{parentName:"p"},"Consumer Settings")," > ",(0,o.mdx)("strong",{parentName:"p"},"Allow OAuth Access Tokens to be used as standalone Bearer tokens")," option to ",(0,o.mdx)("strong",{parentName:"p"},"Yes"),". You can also enable this setting from the CLI by running the following command:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento config:set oauth/consumer/enable_integration_as_bearer 1\n")),(0,o.mdx)("p",null,"If you are trying to upgrade from a previous version and need to update your integration implementation to properly utilize the OAuth workflow, review ",(0,o.mdx)("a",{parentName:"p",href:"./gs-authentication-oauth.md"},"OAuth-based Authentication"),". Otherwise, you can partially update your integration to simply store and utilize all four credentials to sign your requests."),(0,o.mdx)("p",null,"There is a comprehensive guide for this on the OAuth-based authentication page, but can also be done in isolation without supporting the entire OAuth workflow. For example, in the following script the four credentials are used to create a new CMS page without using external libraries or implementing the full OAuth handshake."),(0,o.mdx)("p",null),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,(0,o.mdx)("b",null,"standalone-oauth.php ")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nconst CONSUMER_KEY = '<placeholder>';\nconst CONSUMER_SECRET = '<placeholder>';\nconst ACCESS_TOKEN = '<placeholder>';\nconst ACCESS_TOKEN_SECRET = '<placeholder>';\n\nclass RequestDTO {\n    public function __construct(\n        public string $url,\n        public string $method = 'GET',\n        public ?string $body = null,\n        public array $headers = [],\n    ) {}\n}\nclass OAuthCredentialsDTO {\n    public function __construct(\n        public string $consumerKey,\n        public string $consumerSecret,\n        public string $accessToken,\n        public string $accessTokenSecret\n    ) {}\n}\n\nclass OAuthRequestSigner\n{\n    public function sign(\n        RequestDTO $request,\n        OAuthCredentialsDTO $credentials\n    ): string {\n        $urlParts = parse_url($request->url);\n        // Normalize the OAuth params for the base string\n        $normalizedHeaders = $request->headers;\n        sort($normalizedHeaders);\n        $oauthParams = [\n            'oauth_consumer_key' => $credentials->consumerKey,\n            'oauth_nonce' => base64_encode(random_bytes(32)),\n            'oauth_signature_method' => 'HMAC-SHA256',\n            'oauth_timestamp' => time(),\n            'oauth_token' => $credentials->accessToken\n        ];\n        // Create the base string\n        $signingUrl = $urlParts['scheme'] . '://' . $urlParts['host'] . $urlParts['path'];\n        $paramString = $this->createParamString($urlParts['query'] ?? null, $oauthParams);\n        $baseString = strtoupper($request->method) . '&' . rawurlencode($signingUrl) . '&' . rawurlencode($paramString);\n        // Create the signature\n        $signatureKey = $credentials->consumerSecret . '&' . $credentials->accessTokenSecret;\n        $signature = base64_encode(hash_hmac('sha256', $baseString, $signatureKey, true));\n        return $this->createOAuthHeader($oauthParams, $signature);\n    }\n    private function createParamString(?string $query, array $oauthParams): string\n    {\n        // Create the params string\n        $params = array_merge([], $oauthParams);\n        if (!empty($query)) {\n            foreach (explode('&', $query) as $paramToValue) {\n                $paramData = explode('=', $paramToValue);\n                if (count($paramData) === 2) {\n                    $params[rawurldecode($paramData[0])] = rawurldecode($paramData[1]);\n                }\n            }\n        }\n        ksort($params);\n        $paramString = '';\n        foreach ($params as $param => $value) {\n            $paramString .= rawurlencode($param) . '=' . rawurlencode($value) . '&';\n        }\n        return rtrim($paramString, '&');\n    }\n    private function createOAuthHeader(array $oauthParams, string $signature): string\n    {\n        // Create the OAuth header\n        $oauthHeader = \"Authorization: Oauth \";\n        foreach ($oauthParams as $param => $value) {\n            $oauthHeader .= \"$param=\\\"$value\\\",\";\n        }\n        return $oauthHeader . \"oauth_signature=\\\"$signature\\\"\";\n    }\n}\n\nfunction send(RequestDTO $request): string\n{\n    $ch = curl_init();\n    curl_setopt($ch, CURLOPT_URL, $request->url);\n    curl_setopt($ch, CURLOPT_HEADER, false);\n    curl_setopt($ch, CURLOPT_HTTPHEADER, $request->headers);\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $request->method);\n    curl_setopt($ch, CURLOPT_POSTFIELDS, $request->body ?? '');\n    return (string)curl_exec($ch);\n}\n\n$oauthSigner = new OAuthRequestSigner();\n$request = new RequestDTO(\n    'https://example.com/rest/V1/cmsPage',\n    'POST',\n    '{\n          \"page\": {\n            \"identifier\": \"test-page\",\n            \"title\": \"my-page\",\n            \"content\": \"<h1>hello</h1>\",\n            \"active\": true\n          }\n        }',\n    ['Content-Type: application/json']\n);\n$request->headers[] = $oauthSigner->sign(\n    $request,\n    new OAuthCredentialsDTO(\n        CONSUMER_KEY,\n        CONSUMER_SECRET,\n        ACCESS_TOKEN,\n        ACCESS_TOKEN_SECRET\n    )\n);\necho send($request);\n"))),(0,o.mdx)("h2",{id:"admin-and-customer-access-tokens"},"Admin and customer access tokens"),(0,o.mdx)("p",null,"Commerce provides a separate token service for administrators and customers. When you request a token from one of these services, the service returns a unique access token in exchange for an account's username and password."),(0,o.mdx)("p",null,"The web API framework allows ",(0,o.mdx)("em",{parentName:"p"},"guest users")," to access resources that are configured with the permission level of anonymous. Guest users are users who the framework cannot authenticate through existing authentication mechanisms. As a guest user, you do not need to, but you can, specify a token in a web API call for a resource with anonymous permission. ",(0,o.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/rest/anonymous-api-security.html"},"Restricting access to anonymous web APIs")," contains a list of APIs that do not require a token."),(0,o.mdx)("p",null,"The following table lists endpoints and services that can be used to get an authentication token. Admin accounts must be authenticated with a ",(0,o.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/security/two-factor-authentication.html"},"two factor authentication")," provider. Some providers may require multiple calls."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Token type"),(0,o.mdx)("th",{parentName:"tr",align:null},"REST"),(0,o.mdx)("th",{parentName:"tr",align:null},"SOAP"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Admin with Google Authenticator"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"POST /V1/tfa/provider/google/authenticate")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"twoFactorAuthGoogleAuthenticateV1"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Admin with Duo Security"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"POST /V1/tfa/provider/duo-security/authenticate")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"twoFactorAuthDuoAuthenticateV1"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Admin with Authy"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"POST /V1/tfa/provider/authy/authenticate")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"twoFactorAuthAuthyAuthenticateV1"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Admin with U2F"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"POST /V1/tfa/provider/u2fkey/verify")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"twoFactorAuthU2fKeyAuthenticateV1"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"POST /V1/integration/customer/token")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"integrationCustomerTokenServiceV1"))))),(0,o.mdx)("p",null,"For most ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/web-api"},"web API")," calls, you supply this token in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Authorization")," request header with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bearer")," HTTP ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/authorization"},"authorization")," scheme to prove your identity. By default, an admin token is valid for 4 hours, while a customer token is valid for 1 hour. You can change these values from Admin by selecting ",(0,o.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,o.mdx)("strong",{parentName:"p"},"Settings")," > ",(0,o.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,o.mdx)("strong",{parentName:"p"},"Services")," > ",(0,o.mdx)("strong",{parentName:"p"},"OAuth")," > ",(0,o.mdx)("strong",{parentName:"p"},"Access Token Expiration"),"."),(0,o.mdx)("p",null,"A cron job that runs hourly removes all expired tokens."),(0,o.mdx)("h2",{id:"request-a-token"},"Request a token"),(0,o.mdx)("p",null,"A access token request contains three basic elements:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Component"),(0,o.mdx)("th",{parentName:"tr",align:null},"Specifies"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Endpoint"),(0,o.mdx)("td",{parentName:"tr",align:null},"A combination of the ",(0,o.mdx)("em",{parentName:"td"},"server")," that fulfills the request, the web service, and the ",(0,o.mdx)("inlineCode",{parentName:"td"},"resource")," against which the request is being made.",(0,o.mdx)("br",null),(0,o.mdx)("br",null),"For example, in the ",(0,o.mdx)("inlineCode",{parentName:"td"},"POST <host>/rest/<store_code>/V1/integration/customer/token")," endpoint:",(0,o.mdx)("br",null),"The server is ",(0,o.mdx)("inlineCode",{parentName:"td"},"magento.host/index.php/"),",",(0,o.mdx)("br",null)," the web service is ",(0,o.mdx)("inlineCode",{parentName:"td"},"rest"),".",(0,o.mdx)("br",null)," and the resource is ",(0,o.mdx)("inlineCode",{parentName:"td"},"/V1/integration/customer/token"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Content type"),(0,o.mdx)("td",{parentName:"tr",align:null},"The content type of the request body. Set this value to either ",(0,o.mdx)("inlineCode",{parentName:"td"},'"Content-Type:application/json"')," or ",(0,o.mdx)("inlineCode",{parentName:"td"},'"Content-Type:application/xml"'),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Credentials"),(0,o.mdx)("td",{parentName:"tr",align:null},"The username and password for a Commerce account.",(0,o.mdx)("br",null),(0,o.mdx)("br",null),"To specify these credentials in a JSON request body, include code similar to the following in the call: ",(0,o.mdx)("br",null),(0,o.mdx)("br",null),(0,o.mdx)("inlineCode",{parentName:"td"},'{"username":"<USER-NAME>;", "password":"<PASSWORD>"}'),(0,o.mdx)("br",null),(0,o.mdx)("br",null),"To specify these credentials in XML, include code similar to the following in the call:",(0,o.mdx)("br",null),(0,o.mdx)("br",null),(0,o.mdx)("inlineCode",{parentName:"td"},"<login><username>customer1</username><password>customer1pw</password></login>"))))),(0,o.mdx)("h3",{id:"examples"},"Examples"),(0,o.mdx)("p",null,"The following image shows a token request for the ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"admin")," account using a REST client:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/cb523/gs_auth_token1.webp 320w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/797b9/gs_auth_token1.webp 640w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/4b075/gs_auth_token1.webp 1280w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/f3ff0/gs_auth_token1.webp 1920w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/26244/gs_auth_token1.webp 1948w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/72799/gs_auth_token1.png 320w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/6af66/gs_auth_token1.png 640w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/21b4d/gs_auth_token1.png 1280w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/29114/gs_auth_token1.png 1920w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/6e52c/gs_auth_token1.png 1948w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/21b4d/gs_auth_token1.png",alt:"REST client",title:"REST client",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"The following example uses the ",(0,o.mdx)("inlineCode",{parentName:"p"},"curl")," command to request a token for a customer account:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://<host>/rest/default/V1/integration/customer/token" \\\n     -H "Content-Type:application/json" \\\n     -d \'{"username":"customer@example.com", "password":"customer_password"}\'\n')),(0,o.mdx)("p",null,"The following example makes the same request with ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/xml"},"XML")," for a customer account token:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://<host>/rest/default/V1/integration/customer/token" \\\n     -H "Content-Type:application/xml"  \\\n     -d "<login><username>customer1</username><password>customer1pw</password></login>"\n')),(0,o.mdx)("p",null,"For more information about the ",(0,o.mdx)("inlineCode",{parentName:"p"},"curl")," command, see ",(0,o.mdx)("a",{parentName:"p",href:"../gs-curl.md"},"Use cURL to run the request")),(0,o.mdx)("h2",{id:"authentication-token-response"},"Authentication token response"),(0,o.mdx)("p",null,"A successful request returns a response body with the token, as follows:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"asdf3hjklp5iuytre")),(0,o.mdx)("h2",{id:"use-the-token-in-a-web-api-request"},"Use the token in a Web API request"),(0,o.mdx)("p",null,"Any web API call that accesses a resource that requires a permission level higher than anonymous must contain the authentication token in the header To do this, specify a HTTP header in the following format:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Authorization: Bearer <authentication token>")),(0,o.mdx)("h3",{id:"admin-access"},"Admin access"),(0,o.mdx)("p",null,"Admins can access any resources for which they are authorized."),(0,o.mdx)("p",null,"For example, to make a web API call with an admin token:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},'curl -X GET "http://<host>/rest/default/V1/customers/2" -H "Authorization: Bearer vbnf3hjklp5iuytre"')),(0,o.mdx)("h3",{id:"customer-access"},"Customer access"),(0,o.mdx)("p",null,"Customers can access only resources with ",(0,o.mdx)("inlineCode",{parentName:"p"},"self")," permissions."),(0,o.mdx)("p",null,"For example, to make a web API call with a customer token:\n",(0,o.mdx)("inlineCode",{parentName:"p"},'curl -X GET "http://<host>/rest/default/V1/customers/me" -H "Authorization: Bearer asdf3hjklp5iuytre"')),(0,o.mdx)("h4",{id:"related-topics"},"Related topics"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"../gs-web-api-request.md"},"Construct a request")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/web-api/services/"},"Configure services as web APIs")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/rest/anonymous-api-security.html"},"Restricting access to anonymous web APIs")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-get-started-authentication-gs-authentication-token-md-c91f16586ddfa0661029.js.map