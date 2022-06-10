"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[979],{31473:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return g}});var a,i=t(87462),o=t(63366),r=(t(15007),t(64983)),m=t(91515),s=["components"],l={},d=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),p={_frontmatter:l},u=m.Z;function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.mdx)(u,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"This topic describes best practices for ",(0,r.mdx)("a",{parentName:"p",href:"https://owasp.org/www-project-api-security/"},"API security"),"."),(0,r.mdx)("h1",{id:"api-security"},"API security"),(0,r.mdx)("h2",{id:"input-limiting"},"Input limiting"),(0,r.mdx)("p",null,"Imposing restrictions on the size and number of resources that a user can request through an API can help mitigate denial-of-service (DoS) vulnerabilities. By default, the following built-in API rate limiting is available:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"REST requests containing inputs that represent a list of entities. When enabled, the default maximum is 20 for synchronous requests and 5,000 for asynchronous requests."),(0,r.mdx)("li",{parentName:"ul"},"REST and GraphQL queries that allow paginated results can be limited to a maximum number of items per page. When enabled, the default maximum is 300."),(0,r.mdx)("li",{parentName:"ul"},"REST queries that allow paginated results can have a default number of items per page imposed. When enabled, the default maximum is 20.")),(0,r.mdx)("p",null,"By default, these input limits are disabled, but you can use the following methods to enable them:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Set the values in the ",(0,r.mdx)("a",{parentName:"li",href:"https://docs.magento.com/user-guide/configuration/services/magento-web-api.html"},"Admin"),"."),(0,r.mdx)("li",{parentName:"ul"},"Run the ",(0,r.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-config-mgmt-set.html#config-cli-config-set"},(0,r.mdx)("inlineCode",{parentName:"a"},"bin/magento config:set")," command"),"."),(0,r.mdx)("li",{parentName:"ul"},"Add entries to the ",(0,r.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/config-guide/prod/config-reference-configphp.html#system"},(0,r.mdx)("inlineCode",{parentName:"a"},"env.php")," file"),"."),(0,r.mdx)("li",{parentName:"ul"},"Set ",(0,r.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/config-guide/deployment/pipeline/example/environment-variables.html"},"environment variables"),".")),(0,r.mdx)("p",null,"When input limiting has been enabled, the system uses the default value for each limitation listed above. You can also configure custom values."),(0,r.mdx)("p",null,"Although some simple examples for configuring these values from the CLI are provided below, all of the values can be ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-config-mgmt-set.html#config-cli-config-set"},"configured per website and per store view")," in addition to being configurable globally. In addition, these values can also be configured ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/prod/config-reference-configphp.html#system"},"via ",(0,r.mdx)("inlineCode",{parentName:"a"},"env.php")),"\nas well as via ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/deployment/pipeline/example/environment-variables.html"},"environment variables"),"."),(0,r.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"In addition, the Admin provides a configuration setting for limiting session sizes for Admin users and storefront visitors."),(0,r.mdx)("h3",{id:"enable-the-input-limiting-system"},"Enable the input limiting system"),(0,r.mdx)("p",null,"To enable these input limiting features from the Admin, go to ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > Settings > ",(0,r.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,r.mdx)("strong",{parentName:"p"},"Services")," > ",(0,r.mdx)("strong",{parentName:"p"},"Web Api Limits")," or ",(0,r.mdx)("strong",{parentName:"p"},"GraphQL Input Limits")," and set ",(0,r.mdx)("strong",{parentName:"p"},"Enable Input Limits")," to ",(0,r.mdx)("strong",{parentName:"p"},"Yes"),"."),(0,r.mdx)("p",null,"To enable with the CLI, run one or both of the following commands:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento config:set webapi/validation/input_limit_enabled 1\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento config:set graphql/validation/input_limit_enabled 1\n")),(0,r.mdx)("h3",{id:"maximum-parameter-inputs"},"Maximum parameter inputs"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"EntityArrayValidator")," class constructor limits the number of objects that can be given to inputs that represent arrays of objects. For example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"PUT /V1/guest-carts/{cartId}/collect-totals")," endpoint contains the input parameter ",(0,r.mdx)("inlineCode",{parentName:"p"},"additionalData->extension_attributes->gift_messages"),", which represents a list of gift message information objects."),(0,r.mdx)("p",null,"There are four possible input arrays:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"additional_data")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"agreement_ids")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"gift_messages")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"custom_attributes"))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "paymentMethod": {\n    "po_number": "string",\n    "method": "string",\n    "additional_data": [\n      "string"\n    ],\n    "extension_attributes": {\n      "agreement_ids": [\n        "string"\n      ]\n    }\n  },\n  "shippingCarrierCode": "string",\n  "shippingMethodCode": "string",\n  "additionalData": {\n    "extension_attributes": {\n      "gift_messages": [\n        {\n          "gift_message_id": 0,\n          "customer_id": 0,\n          "sender": "string",\n          "recipient": "string",\n          "message": "string",\n          "extension_attributes": {\n            "entity_id": "string",\n            "entity_type": "string",\n            "wrapping_id": 0,\n            "wrapping_allow_gift_receipt": true,\n            "wrapping_add_printed_card": true\n          }\n        }\n      ]\n    },\n    "custom_attributes": [\n      {\n        "attribute_code": "string",\n        "value": "string"\n      }\n    ]\n  }\n}\n')),(0,r.mdx)("p",null,"By default, any one of these arrays can include up to 20 items, but you can change this value in the configuration UI via ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > Settings > ",(0,r.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,r.mdx)("strong",{parentName:"p"},"Services")," > ",(0,r.mdx)("strong",{parentName:"p"},"Web API Input Limits")," > ",(0,r.mdx)("strong",{parentName:"p"},"Input List Limit")," or via CLI using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"webapi/validation/complex_array_limit")," configuration path."),(0,r.mdx)("h3",{id:"input-limit-for-rest-endpoints"},"Input limit for REST endpoints"),(0,r.mdx)("p",null,"Some REST endpoints can contain a high number of elements, and developers need a way to set the limit for each endpoint. The limit for a specific REST endpoint can be set in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"webapi.xml")," configuration file for synchronous requests and ",(0,r.mdx)("inlineCode",{parentName:"p"},"webapi_async.xml")," for asynchronous requests.\nTo do this, assign a value for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<data input-array-size-limit/>")," attribute within a ",(0,r.mdx)("inlineCode",{parentName:"p"},"<route>")," definition. The value for ",(0,r.mdx)("inlineCode",{parentName:"p"},"input-array-size-limit")," must be a non-negative integer."),(0,r.mdx)("p",null,"The following example sets the input limit for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"/V1/some-custom-route")," route.\nIf the route works synchronously, open the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<module_dir>/etc/webapi.xml")," configuration file. Otherwise, open ",(0,r.mdx)("inlineCode",{parentName:"p"},"<module_dir>/etc/webapi_async.xml"),".\nAdd the ",(0,r.mdx)("inlineCode",{parentName:"p"},"data")," tag with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"input-array-size-limit")," attribute to the route configuration."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n\x3c!--\nSome custom module\n--\x3e \n<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">\n    <route url="/V1/some-custom-route" method="POST">\n        <service class="Vendor\\Module\\Api\\EntityRepositoryInterface" method="save"/>\n        <resources>\n            <resource ref="Vendor_Entity::entities" />\n        </resources>\n        <data input-array-size-limit="5" /> \x3c!--  limit only for route `/V1/some-custom-route`  --\x3e\n    </route>\n</routes>\n')),(0,r.mdx)("p",null,"Clear the configuration cache for the changes to take effect."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento cache:clear config\n")),(0,r.mdx)("h3",{id:"values-by-default-for-rest-endpoints"},"Values by default for REST endpoints"),(0,r.mdx)("p",null,"If you need to change the default limits for REST endpoints, then edit the ",(0,r.mdx)("inlineCode",{parentName:"p"},"webapi")," section of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<magento_root>/app/etc/env.php")," file as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-conf"},"[\n//...\n    'webapi' => [\n        'sync' => [\n            'default_input_array_size_limit' => <non-negative value>, //overrides values for synchronous REST endpoints\n        ],\n        'async' => [\n            'default_input_array_size_limit' => <non-negative value>, //overrides values for asynchronous REST endpoints\n        ],\n    ]\n//...\n];\n")),(0,r.mdx)("h3",{id:"maximum-page-size"},"Maximum page size"),(0,r.mdx)("p",null,"The maximum page size setting controls the pagination of various web API responses. By default, the maximum value is ",(0,r.mdx)("inlineCode",{parentName:"p"},"300"),". You can change the default in the Admin by selecting ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > Settings > ",(0,r.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,r.mdx)("strong",{parentName:"p"},"Services")," > ",(0,r.mdx)("strong",{parentName:"p"},"Web API Input Limits")," or ",(0,r.mdx)("strong",{parentName:"p"},"GraphQl Input Limits")," >  ",(0,r.mdx)("strong",{parentName:"p"},"Maximum Page Size")," field."),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/graphql/security-configuration.html"},"GraphQL security configuration")," describes how to set the maximum page size in GraphQL."),(0,r.mdx)("h3",{id:"default-page-size"},"Default page size"),(0,r.mdx)("p",null,"The Default Page Size setting controls the pagination of various web API responses. You can change the default value of ",(0,r.mdx)("inlineCode",{parentName:"p"},"20")," in the Admin by selecting ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > Settings > ",(0,r.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,r.mdx)("strong",{parentName:"p"},"Services")," > ",(0,r.mdx)("strong",{parentName:"p"},"Web API Input Limits")," > ",(0,r.mdx)("strong",{parentName:"p"},"Default Page Size"),". To change the value from the CLI, run the following command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"bin/magento config:set webapi/validation/default_page_size 30\n")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-get-started-api-security-md-fda641340e9f1a10687e.js.map