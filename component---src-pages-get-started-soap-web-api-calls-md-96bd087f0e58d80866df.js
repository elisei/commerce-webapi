"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[103],{21026:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return p}});var n=a(87462),r=a(63366),o=(a(15007),a(64983)),s=a(91515),i=["components"],l={},m={_frontmatter:l},d=s.Z;function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.mdx)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"using-soap-services"},"Using SOAP services"),(0,o.mdx)("h2",{id:"wsdl-file"},"WSDL File"),(0,o.mdx)("p",null,"A WSDL file is generated only for services that you request. This means that different clients may use different services and therefore use different WSDLs."),(0,o.mdx)("p",null,"The Adobe Commerce and Magento Open Source web ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API")," uses WSDL 1.2, which complies with WS-I 2.0 Basic Profile."),(0,o.mdx)("p",null,"Each service interface that is part of a ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/service-contract"},"service contract")," is represented as a separate service in the WSDL."),(0,o.mdx)("p",null,"To consume several services, you must specify them in the WSDL endpoint ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/url"},"URL"),"."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Service"),(0,o.mdx)("th",{parentName:"tr",align:null},"WSDL endpoint URL"),(0,o.mdx)("th",{parentName:"tr",align:null},"Available services"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"customer"),(0,o.mdx)("td",{parentName:"tr",align:null},"http://magentohost/soap?wsdl&services=customerCustomerRepositoryV1"),(0,o.mdx)("td",{parentName:"tr",align:null},"\\Magento\\Customer\\Api\\Data\\CustomerInterface")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"customer, catalogProduct"),(0,o.mdx)("td",{parentName:"tr",align:null},"http://magentohost/soap/custom_store?wsdl&services=customerCustomerRepositoryV1,catalogProductRepositoryV1"),(0,o.mdx)("td",{parentName:"tr",align:null},"\\Magento\\Customer\\Api\\Data\\CustomerInterface, \\Magento\\Catalog\\Api\\Data\\ProductInterface")))),(0,o.mdx)("p",null,"The WSDL URL follows the following pattern:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"http://<host>/soap/<optional_store_code>?wsdl&services=<service_name_1>,<service_name_2>")),(0,o.mdx)("p",null,"You must specify each service version in the endpoint URL."),(0,o.mdx)("p",null,"This way, you can have a strict contract between your application and the service provider."),(0,o.mdx)("p",null,"If you want an overview to all the available Web Services, use the following URL format to get a list of all SOAP Services:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"http://<host>/soap/all?wsdl_list=1")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},"<response>\n    ...\n    <storeStoreRepositoryV1>\n        <wsdl_endpoint>http://<host>/soap/all?wsdl&services=storeStoreRepositoryV1</wsdl_endpoint>\n    </storeStoreRepositoryV1>\n    <storeGroupRepositoryV1>\n        <wsdl_endpoint>http://<host>/soap/all?wsdl&services=storeGroupRepositoryV1</wsdl_endpoint>\n    </storeGroupRepositoryV1>\n    <storeWebsiteRepositoryV1>\n        <wsdl_endpoint>http://<host>/soap/all?wsdl&services=storeWebsiteRepositoryV1</wsdl_endpoint>\n    </storeWebsiteRepositoryV1>\n    ...\n</response>\n")),(0,o.mdx)("h3",{id:"service-class-to-service-name-conversion-rules"},"Service class-to-service name conversion rules"),(0,o.mdx)("p",null,"Service names use the following conventions:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"CamelCase is used for service naming."),(0,o.mdx)("li",{parentName:"ul"},"The string ",(0,o.mdx)("inlineCode",{parentName:"li"},"Service")," is omitted."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"Magento")," prefix is omitted."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"Interface")," suffix is omitted."),(0,o.mdx)("li",{parentName:"ul"},"If the service name is the same as the ",(0,o.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/module"},"module")," name, the module name is omitted. For example, if there is a customer service interface in the customer module, the word ",(0,o.mdx)("inlineCode",{parentName:"li"},"customer")," will be used in the service name only once.")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Original Service Interface Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Service Name"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"\\Magento\\Customer\\Api\\Data\\CustomerInterface"),(0,o.mdx)("td",{parentName:"tr",align:null},"customerCustomerRepositoryV1")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"\\Magento\\Customer\\Api\\AccountManagementInterface"),(0,o.mdx)("td",{parentName:"tr",align:null},"customerAccountManagementV1")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"\\Enterprise\\Customer\\Service\\V3\\Customer\\AddressInterface"),(0,o.mdx)("td",{parentName:"tr",align:null},"enterpriseCustomerAddressV3")))),(0,o.mdx)("h2",{id:"authentication"},"Authentication"),(0,o.mdx)("p",null,"Protected SOAP resources can be accessed using bearer tokens (OAuth access tokens) over HTTP. Access tokens are strings representing an access ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/authorization"},"authorization")," issued to the client. For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"./authentication/gs-authentication-oauth.md"},"OAuth-based authentication")),(0,o.mdx)("p",null,"The following ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP")," script illustrates how to get an access token:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n$opts = [\n            'http'=> [\n                'header' => 'Authorization: Bearer 36849300bca4fbff758d93a3379f1b8e'\n            ]\n        ];\n$wsdlUrl = 'http://magento.ll/soap/default?wsdl=1&services=testModule1AllSoapAndRestV1';\n$serviceArgs = [\"id\" => 1];\n\n$context = stream_context_create($opts);\n$soapClient = new SoapClient($wsdlUrl, ['version' => SOAP_1_2, 'stream_context' => $context]);\n\n$soapResponse = $soapClient->testModule1AllSoapAndRestV1Item($serviceArgs); ?>\n")),(0,o.mdx)("h4",{id:"related-topics"},"Related topics"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"./authentication/gs-authentication-oauth.md"},"OAuth-based authentication")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/php/development/components/service-contracts/"},"Service contracts")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/soap/bk-soap.html"},"SOAP Reference"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-get-started-soap-web-api-calls-md-96bd087f0e58d80866df.js.map