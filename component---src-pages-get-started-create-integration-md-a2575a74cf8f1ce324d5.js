"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[967],{53055:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return c}});var a,o=t(87462),r=t(63366),i=(t(15007),t(64983)),m=t(91515),l=["components"],d={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:d},u=m.Z;function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"create-an-integration"},"Create an integration"),(0,i.mdx)("p",null,"An ",(0,i.mdx)("strong",{parentName:"p"},"integration")," enables third-party services to call the Adobe Commerce and Magento Open Source web APIs. The APIs currently support external software, such as Accounting, Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), Product Information Management (PIM), and marketing automation systems out of the box."),(0,i.mdx)("p",null,"Implementing a simple integration requires little knowledge of ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP")," or Commerce internal processes. However, you will need a working knowledge of"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../get-started/"},"Commerce REST or SOAP Web APIs")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"./authentication/"},"Web API authentication")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"./authentication/gs-authentication-oauth.md"},"OAuth-based authentication"))),(0,i.mdx)("p",null,"Before you begin creating a module, make sure that you have a working installation that meets the ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements.html"},"System Requirements"),"."),(0,i.mdx)("p",null,"To create an integration, follow these general steps:"),(0,i.mdx)("h2",{id:"create-a-skeletal-module"},"Create a skeletal module"),(0,i.mdx)("p",null,"To develop a module, you must:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Create the module file structure.")," The module for an integration, like any other of your custom modules, should be placed under ",(0,i.mdx)("inlineCode",{parentName:"p"},"<base_dir>/app/code/app/code/<vendor_name>/<module_name>"),". E.g. ",(0,i.mdx)("inlineCode",{parentName:"p"},"<base_dir>/app/code/Vendor1/Module1")),(0,i.mdx)("p",{parentName:"li"},"Also create  ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc/integration"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"Setup")," subdirectories under ",(0,i.mdx)("inlineCode",{parentName:"p"},"<base_dir>/app/code/<vendor_name>/<module_name>"),", as shown in the following example:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"cd <base_dir>\n")),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p app/code/<vendor_name>/<module_name>/etc/integration\n")),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p app/code/<vendor_name>/<module_name>/Setup\n")),(0,i.mdx)("p",{parentName:"li"},"For more detailed information, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/component-file-structure/"},"Create your component file structure"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Define your module configuration file.")," The ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc/module.xml")," file provides basic information about the module. Change directories to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc")," directory and create the ",(0,i.mdx)("inlineCode",{parentName:"p"},"module.xml")," file. You must specify values for the following attributes:"),(0,i.mdx)("table",null,(0,i.mdx)("tr",null,(0,i.mdx)("th",null,"Attribute"),(0,i.mdx)("th",null,"Description")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,"name"),(0,i.mdx)("td",null,"A string that uniquely identifies the [module](https://glossary.magento.com/module).")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,"setup_version"),(0,i.mdx)("td",null,"The version of Commerce the component uses"))),"The following example shows an example `etc/module.xml` file.",(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n   <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">\n       <module name="Vendor1_Module1" setup_version="2.0.0">\n            <sequence>\n                <module name="Magento_Integration"/>\n            </sequence>\n       </module>\n     </config>\n')),(0,i.mdx)("p",{parentName:"li"},"Module ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_Integration"),' is added to "sequence" to be loaded first. It helps to avoid the issue, when a module with integration config loaded, that leads to a malfunction.')),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Add your module's ",(0,i.mdx)("inlineCode",{parentName:"strong"},"composer.json")," file.")," Composer is a dependency manager for PHP. You must create a ",(0,i.mdx)("inlineCode",{parentName:"p"},"composer.json")," file for your module so that Composer can install and update the libraries your module relies on. Place the ",(0,i.mdx)("inlineCode",{parentName:"p"},"composer.json")," file in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"module-<module_name>")," directory."),(0,i.mdx)("p",{parentName:"li"},"The following example demonstrates a minimal ",(0,i.mdx)("inlineCode",{parentName:"p"},"composer.json")," file."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'  {\n     "name": "Vendor1_Module1",\n     "description": "create integration from config",\n     "require": {\n        "php": "~7.2.0|~7.3.0",\n        "magento/framework": "2.0.0",\n        "magento/module-integration": "2.0.0"\n     },\n     "type": "magento2-module",\n     "version": "1.0",\n     "autoload": {\n        "files": [ "registration.php" ],\n        "psr-4": {\n           "Vendor1\\\\Module1\\\\": ""\n        }\n     }\n  }\n  \n')),(0,i.mdx)("p",{parentName:"li"}," For more information, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/component-name/"},"Create a component"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Create a ",(0,i.mdx)("inlineCode",{parentName:"strong"},"registration.php")," file")," The ",(0,i.mdx)("inlineCode",{parentName:"p"},"registration.php")," registers the module with the system. It must be placed in the module's root directory."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\\Magento\\Framework\\Component\\ComponentRegistrar::register(\n\\Magento\\Framework\\Component\\ComponentRegistrar::MODULE,\n'Vendor1_Module1',\n__DIR__\n);\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Create an install class.")," Change directories to your ",(0,i.mdx)("inlineCode",{parentName:"p"},"Setup")," directory. Create a ",(0,i.mdx)("inlineCode",{parentName:"p"},"InstallData.php")," file that installs the integration configuration data into the Commerce integration table."),(0,i.mdx)("p",{parentName:"li"},"The following sample is boilerplate and requires minor changes to make your integration work."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nnamespace Vendor1\\Module1\\Setup;\n\nuse Magento\\Framework\\Setup\\ModuleContextInterface;\nuse Magento\\Framework\\Setup\\ModuleDataSetupInterface;\nuse Magento\\Integration\\Model\\ConfigBasedIntegrationManager;\nuse Magento\\Framework\\Setup\\InstallDataInterface;\n\nclass InstallData implements InstallDataInterface\n{\n    /**\n     * @var ConfigBasedIntegrationManager\n     */\n\n    private $integrationManager;\n\n    /**\n     * @param ConfigBasedIntegrationManager $integrationManager\n     */\n\n    public function __construct(ConfigBasedIntegrationManager $integrationManager)\n    {\n        $this->integrationManager = $integrationManager;\n    }\n\n    /**\n     * {@inheritdoc}\n     */\n\n    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)\n    {\n        $this->integrationManager->processIntegrationConfig(['TestIntegration']);\n    }\n}\n")),(0,i.mdx)("p",{parentName:"li"}," In the following line"),(0,i.mdx)("p",{parentName:"li"}," ",(0,i.mdx)("inlineCode",{parentName:"p"},"$this->integrationManager->processIntegrationConfig(['testIntegration']);")),(0,i.mdx)("p",{parentName:"li"}," ",(0,i.mdx)("inlineCode",{parentName:"p"},"testIntegration")," must refer to your ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc/integration/config.xml")," file, and the integration name value must be the same."),(0,i.mdx)("p",{parentName:"li"}," The following example demonstrates a minimal ",(0,i.mdx)("inlineCode",{parentName:"p"},"config.xml")," file."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<integrations>\n   <integration name="TestIntegration">\n      <email>someone@example.com</email>\n      <endpoint_url>https://example.com</endpoint_url>\n      <identity_link_url>https://example.com/identity_link_url</identity_link_url>\n   </integration>\n</integrations>\n')),(0,i.mdx)("p",{parentName:"li"}," Also, be sure to change the path after ",(0,i.mdx)("inlineCode",{parentName:"p"},"namespace")," for your vendor and module names."))),(0,i.mdx)("h2",{id:"create-integration-files"},"Create integration files"),(0,i.mdx)("p",null,"The Integration module simplifies the process of defining your integration. This module automatically performs functions such as:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Managing the third-party account that connects to Commerce."),(0,i.mdx)("li",{parentName:"ul"},"Maintaining OAuth authorizations and user data."),(0,i.mdx)("li",{parentName:"ul"},"Managing security tokens and requests.")),(0,i.mdx)("p",null,"To customize your module, you must create multiple ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/xml"},"XML")," files and read through other files to determine what resources existing modules have access to."),(0,i.mdx)("p",null,"The process for customizing your module includes"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#define-the-required-resources"},"Define the required resources")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#pre-configure-the-integration"},"Pre-configure the integration"))),(0,i.mdx)("h3",{id:"define-the-required-resources"},"Define the required resources"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc/integration/api.xml")," file defines which ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API")," resources the integration has access to."),(0,i.mdx)("p",null,"To determine which resources an integration needs access to, review the permissions defined in each module's ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc/acl.xml")," file."),(0,i.mdx)("p",null,"In the following example, the test integration requires access to the following resources in the Sales module:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<integrations>\n    <integration name="TestIntegration">\n        <resources>\n            \x3c!-- To grant permission to Magento_Log::online, its parent Magento_Customer::customer needs to be declared as well--\x3e\n            <resource name="Magento_Customer::customer" />\n            <resource name="Magento_Log::online" />\n            \x3c!-- To grant permission to Magento_Sales::reorder, all its parent resources need to be declared--\x3e \n            <resource name="Magento_Sales::sales" />\n            <resource name="Magento_Sales::sales_operation" />\n            <resource name="Magento_Sales::sales_order" />\n            <resource name="Magento_Sales::actions" />\n            <resource name="Magento_Sales::reorder" />\n        </resources>\n    </integration>\n</integrations>\n')),(0,i.mdx)("h3",{id:"pre-configure-the-integration"},"Pre-configure the integration"),(0,i.mdx)("p",null,"Your module can optionally provide values in configuration file ",(0,i.mdx)("inlineCode",{parentName:"p"},"config.xml"),", so that the integration can be automatically pre-configured with default values. To enable this feature, update the ",(0,i.mdx)("inlineCode",{parentName:"p"},"config.xml")," file in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc/integration")," directory."),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"If you pre-configure the integration, the values cannot be edited from the ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"admin")," panel."),(0,i.mdx)("p",null,"The file defines which API resources the integration has access to."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<integrations>\n   <integration name="TestIntegration">\n       <email></email>\n       <endpoint_url></endpoint_url>\n       <identity_link_url></identity_link_url>\n   </integration>\n</integrations>\n')),(0,i.mdx)("table",null,(0,i.mdx)("tr",null,(0,i.mdx)("th",null,"Element"),(0,i.mdx)("th",null,"Description")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,"integrations"),(0,i.mdx)("td",null,"Contains one or more integration definitions.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,'integration name=""'),(0,i.mdx)("td",null,"Defines an integration. The ",(0,i.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"name")," must be specified.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,"email"),(0,i.mdx)("td",null,"An email to associate with this integration.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,"endpoint_url"),(0,i.mdx)("td",null,(0,i.mdx)("p",null,"Optional. The [URL](https://glossary.magento.com/url) where OAuth credentials can be sent when using OAuth for token exchange. We strongly recommend using ",(0,i.mdx)("inlineCode",{className:"spectrum-Body--sizeS"},"https://"),"."),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{href:"./authentication/gs-authentication-oauth"},"OAuth-based authentication")," for details."))),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,"identity_link_url"),(0,i.mdx)("td",null,"Optional. The URL that redirects the user to link their 3rd party account with the Commerce integration."))),(0,i.mdx)("h2",{id:"install-your-module"},"Install your module"),(0,i.mdx)("p",null,"Use the following steps to install your module:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Run the following command to update the ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/database-schema"},"database schema")," and data."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:upgrade\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Run the following command to generate the new code."),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Note:")," In Production mode, you may receive a message to 'Please rerun Magento compile command'.  Enter the command below. You are not prompted to run the compile command in Developer mode."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:di:compile\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Run the following command to clean the cache."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento cache:clean\n")))),(0,i.mdx)("h2",{id:"check-your-integration"},"Check your integration"),(0,i.mdx)("p",null,"Log in to the Admin and navigate to ",(0,i.mdx)("strong",{parentName:"p"},"System > Extensions > Integrations"),". The integration should be displayed in the grid."),(0,i.mdx)("h2",{id:"integrate-with-your-application"},"Integrate with your application"),(0,i.mdx)("p",null,"Before you can activate your integration, you must create two pages on your application to handle OAuth communications."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The location specified in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"identity_link_url")," parameter must point to a page that can handle login requests.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The location specified in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"endpoint_url")," parameter (",(0,i.mdx)("strong",{parentName:"p"},"Callback URL")," in Admin) must be able to process OAuth token exchanges."))),(0,i.mdx)("h3",{id:"login-page"},"Login page"),(0,i.mdx)("p",null,"When a merchant clicks the ",(0,i.mdx)("strong",{parentName:"p"},"Activate")," button in Admin, a pop-up login page for the third-party application displays. Commerce sends values for ",(0,i.mdx)("inlineCode",{parentName:"p"},"oauth_consumer_key")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"success_call_back")," parameters. The application must store the value for ",(0,i.mdx)("inlineCode",{parentName:"p"},"oauth_consumer_key")," to tie it to the login ID. Use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"success_call_back")," parameter to return control back to Commerce."),(0,i.mdx)("h3",{id:"callback-page"},"Callback page"),(0,i.mdx)("p",null,"The callback page must be able to perform the following tasks:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Receive an initial HTTPS POST that Commerce sends when the merchant activates integration. This post contains the Commerce store URL, an ",(0,i.mdx)("inlineCode",{parentName:"p"},"oauth_verifier"),", the OAuth consumer key, and the OAuth consumer secret. The consumer key and secret are generated when the integration is created.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Ask for a request token. A request token is a temporary token that the user exchanges for an access token. Use the following API to get a request token:"),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"POST /oauth/token/request")),(0,i.mdx)("p",{parentName:"li"},"See ",(0,i.mdx)("a",{parentName:"p",href:"./authentication/gs-authentication-oauth.md#get-a-request-token"},"Get a request token")," for more details about this call.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Parse the request token response. The response contains an ",(0,i.mdx)("inlineCode",{parentName:"p"},"oauth_token")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"oauth_token_secret"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Ask for an access token. The request token must be exchanged for an access token. Use the following API to get a request token:"),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"POST /oauth/token/access")),(0,i.mdx)("p",{parentName:"li"},"See ",(0,i.mdx)("a",{parentName:"p",href:"./authentication/gs-authentication-oauth.md#get-an-access-token/"},"Get an access token")," for more details about this call.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Parse the access token response. The response contains an ",(0,i.mdx)("inlineCode",{parentName:"p"},"oauth_token")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"oauth_token_secret"),". These values will be different than those provided in the request token response.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Save the access token and other OAuth parameters. The access token and OAuth parameters must be specified in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Authorization")," header in each call to Commerce."))),(0,i.mdx)("h2",{id:"related-topics"},"Related Topics"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"./authentication/"},"Web API authentication")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"./authentication/gs-authentication-oauth.md"},"OAuth-based authentication")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements.html"},"System Requirements")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/php/development/build/component-file-structure/"},"Create the module file structure")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/php/development/build/component-name/"},"Create a component"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-get-started-create-integration-md-a2575a74cf8f1ce324d5.js.map