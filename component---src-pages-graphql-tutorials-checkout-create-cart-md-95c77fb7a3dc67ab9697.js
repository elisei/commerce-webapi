"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[6223],{14384:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return d}});var n=a(87462),r=a(63366),s=(a(15007),a(64983)),o=a(91515),i=["components"],m={},u={_frontmatter:m},p=o.Z;function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.mdx)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"step-2-create-an-empty-cart"},"Step 2. Create an empty cart"),(0,s.mdx)("p",null,"The procedure for creating a cart varies for logged-in customers and guests."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"customerCart")," query returns the active cart for the logged-in customer. If the cart does not exist, the query creates one. You must specify the customer's authorization token in the headers. Otherwise, the query fails. ",(0,s.mdx)("a",{parentName:"p",href:"../../usage/authorization-tokens.md"},'"Get customer authorization token"')," describes these tokens."),(0,s.mdx)("p",null,"For guests, use the ",(0,s.mdx)("a",{parentName:"p",href:"../../schema/cart/mutations/create-empty-cart.md"},(0,s.mdx)("inlineCode",{parentName:"a"},"createEmptyCart"))," mutation to create an empty shopping cart and generate a cart ID for a guest user. If the guest later logs in as a customer, use the ",(0,s.mdx)("a",{parentName:"p",href:"../../schema/cart/mutations/merge.md"},(0,s.mdx)("inlineCode",{parentName:"a"},"mergeCarts"))," mutation to transfer the contents of the guest cart into the customer's cart."),(0,s.mdx)("h2",{id:"create-a-customer-cart"},"Create a customer cart"),(0,s.mdx)("p",null,"The customer created in the previous step does not have an active cart. The following query creates an empty cart and returns the cart ID. You must specify the customer's authorization token in the headers of the call."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Request:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  customerCart{\n    id\n  }\n}\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customerCart": {\n      "id": "pXVxnNg4PFcK1lD60O5evqF7f4SkiRR1"\n    }\n  }\n}\n')),(0,s.mdx)("p",null,"In the subsequent tutorial steps, the unique shopping cart identifier ",(0,s.mdx)("inlineCode",{parentName:"p"},"pXVxnNg4PFcK1lD60O5evqF7f4SkiRR1")," will be listed as ",(0,s.mdx)("inlineCode",{parentName:"p"},"{ CART_ID }"),".\nCopy the value of the id attribute. Use this value in subsequent steps wherever the { CART_ID } variable is specified."),(0,s.mdx)("h2",{id:"create-a-guest-cart"},"Create a guest cart"),(0,s.mdx)("p",null,"The following example creates an empty cart for a guest. Do not include an authorization token on any call made on behalf of a guest."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Request:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  createEmptyCart\n}\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createEmptyCart": "A7jCcOmUjjCh7MxDIzu1SeqdqETqEa5h"\n  }\n}\n')),(0,s.mdx)("p",null,"In the subsequent tutorial steps, the unique shopping cart identifier ",(0,s.mdx)("inlineCode",{parentName:"p"},"A7jCcOmUjjCh7MxDIzu1SeqdqETqEa5h")," will be listed as ",(0,s.mdx)("inlineCode",{parentName:"p"},"{ CART_ID }"),".\nCopy the value of the id attribute. Use this value in subsequent steps wherever the { CART_ID } variable is specified."),(0,s.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,s.mdx)("p",null,"There are no additional verification steps. The value of ",(0,s.mdx)("inlineCode",{parentName:"p"},"id")," is not displayed on the website or in the Admin."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-tutorials-checkout-create-cart-md-95c77fb7a3dc67ab9697.js.map