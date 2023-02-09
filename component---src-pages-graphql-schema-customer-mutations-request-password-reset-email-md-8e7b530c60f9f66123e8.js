"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[2404],{5635:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return l}});var n=t(87462),r=t(63366),s=(t(15007),t(64983)),m=t(91515),i=["components"],d={},o={_frontmatter:d},p=m.Z;function l(e){var a=e.components,t=(0,r.Z)(e,i);return(0,s.mdx)(p,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"requestpasswordresetemail-mutation"},"requestPasswordResetEmail mutation"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"requestPasswordResetEmail")," mutation triggers the password reset email by the provided email address. Use it to initiate the process to reset the registered customer's password before calling the ",(0,s.mdx)("a",{parentName:"p",href:"reset-password.md"},"resetPassword")," mutation."),(0,s.mdx)("p",null,"When the customer clicks the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Set a New Password")," button, the application sends an email to the customer that contains a URL for resetting their password."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.22641509433963%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/e7ba69adb983877c634486b8bfbc30b9/dda86/reset-password-email.webp 265w","/commerce-webapi/static/e7ba69adb983877c634486b8bfbc30b9/010e6/reset-password-email.webp 530w","/commerce-webapi/static/e7ba69adb983877c634486b8bfbc30b9/668f0/reset-password-email.webp 1060w","/commerce-webapi/static/e7ba69adb983877c634486b8bfbc30b9/b87ad/reset-password-email.webp 1476w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/e7ba69adb983877c634486b8bfbc30b9/28773/reset-password-email.png 265w","/commerce-webapi/static/e7ba69adb983877c634486b8bfbc30b9/a0177/reset-password-email.png 530w","/commerce-webapi/static/e7ba69adb983877c634486b8bfbc30b9/ea60f/reset-password-email.png 1060w","/commerce-webapi/static/e7ba69adb983877c634486b8bfbc30b9/8d257/reset-password-email.png 1476w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/e7ba69adb983877c634486b8bfbc30b9/ea60f/reset-password-email.png",alt:"Reset password email",title:"Reset password email",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"The URL has the following format:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-text"},"https://<MAGENTOSITE>/customer/account/createPassword/?token=gh80pkjGdsPyiXc0sUUXswX1uGN7crUr\n")),(0,s.mdx)("p",null,"Use the value of the token in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"resetPassword")," mutation."),(0,s.mdx)("h2",{id:"syntax"},"Syntax"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"mutation: {requestPasswordResetEmail(email: String!): Boolean}")),(0,s.mdx)("h2",{id:"example-usage"},"Example usage"),(0,s.mdx)("p",null,"The following call triggers the password reset email."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Request:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  requestPasswordResetEmail(\n    email: "roni_cost@example.com"\n  )\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "requestPasswordResetEmail": true\n  }\n}\n')),(0,s.mdx)("h2",{id:"input-arguments"},"Input arguments"),(0,s.mdx)("p",null,"You must specify the customer's email address in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"email")," input argument."),(0,s.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"requestPasswordResetEmail")," mutation returns ",(0,s.mdx)("inlineCode",{parentName:"p"},"true")," if both of the following operations are successful:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The reset password operation initiates."),(0,s.mdx)("li",{parentName:"ul"},"The application sends an email containing a reset link.")),(0,s.mdx)("p",null,"Otherwise, the mutation returns ",(0,s.mdx)("inlineCode",{parentName:"p"},"false"),"."),(0,s.mdx)("h2",{id:"errors"},"Errors"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Error"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"Cannot reset the customer's password")),(0,s.mdx)("td",{parentName:"tr",align:null},"A general error message that appears on some internal system errors. The original error is logged and can be found in the application logs.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"The account is locked")),(0,s.mdx)("td",{parentName:"tr",align:null},"You cannot modify a locked customer account.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"The email address has an invalid format.")),(0,s.mdx)("td",{parentName:"tr",align:null},"The value provided in the ",(0,s.mdx)("inlineCode",{parentName:"td"},"email")," argument has an invalid format.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"You must specify an email address.")),(0,s.mdx)("td",{parentName:"tr",align:null},"An empty value is provided in the ",(0,s.mdx)("inlineCode",{parentName:"td"},"email")," argument.")))),(0,s.mdx)("h2",{id:"related-topics"},"Related topics"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"reset-password.md"},"resetPassword mutation")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-mutations-request-password-reset-email-md-8e7b530c60f9f66123e8.js.map