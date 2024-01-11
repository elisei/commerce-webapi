"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[8859],{15510:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return b}});var a=n(87462),i=n(45987),c=(n(35776),n(3905)),p=n(65663);const o=["components"],s={},d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.mdx)("div",t)},r=d("CodeBlock"),m=d("InlineAlert"),u={_frontmatter:s},l=p.Z;function b(e){let{components:t}=e,n=(0,i.Z)(e,o);return(0,c.mdx)(l,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"step-3-create-the-bundle-product"},"Step 3. Create the bundle product"),(0,c.mdx)("p",null,"Now we will add the bundle product. We will use two bundle options: ",(0,c.mdx)("inlineCode",{parentName:"p"},"RAM")," and ",(0,c.mdx)("inlineCode",{parentName:"p"},"Monitor"),"."),(0,c.mdx)("p",null,(0,c.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-html"},"POST http://domain.com/rest/default/V1/products\n")),(0,c.mdx)(r,{slots:"heading, code",repeat:"2",languages:"JSON, JSON",mdxType:"CodeBlock"}),(0,c.mdx)("h4",{id:"payload"},"Payload"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "product": {\n    "sku": "Desktop-Computer",\n    "name": "Desktop Computer",\n    "attribute_set_id": 4,\n    "status": 1,\n    "visibility": 4,\n    "type_id": "bundle",\n    "extension_attributes": {\n      "stock_item": {\n        "qty": 100,\n        "is_in_stock":true\n      },\n      "website_ids": [\n        1\n      ],\n      "category_links": [\n            {\n                "position": 0,\n                "category_id": "32"\n            }\n      ],\n      "bundle_product_options": [\n        {\n          "option_id": 0,\n          "position": 1,\n          "sku": "computer-ram",\n          "title": "RAM",\n          "type": "select",\n          "required": true,\n          "product_links": [\n            {\n              "sku": "RAM-12GB",\n              "option_id": 1,\n              "qty": 1,\n              "position": 1,\n              "is_default": false,\n              "price": 0,\n              "price_type": 0,\n              "can_change_quantity": 0\n            },\n            {\n              "sku": "RAM-24GB",\n              "option_id": 1,\n              "qty": 1,\n              "position": 2,\n              "is_default": false,\n              "price": 0,\n              "price_type": 0,\n              "can_change_quantity": 0\n            }\n          ]\n        },\n        {\n          "option_id": 1,\n          "position": 2,\n          "sku": "computer-monitor",\n          "title": "Monitor",\n          "type": "select",\n          "required": true,\n          "product_links": [\n            {\n              "sku": "Monitor-15",\n              "option_id": 2,\n              "qty": 1,\n              "position": 1,\n              "is_default": false,\n              "price": 0,\n              "price_type": 0,\n              "can_change_quantity": 0\n            },\n            {\n              "sku": "Monitor-17",\n              "option_id": 2,\n              "qty": 1,\n              "position": 2,\n              "is_default": false,\n              "price": 0,\n              "price_type": 0,\n              "can_change_quantity": 0\n            }\n          ]\n        }\n      ]\n    },\n    "custom_attributes": [\n      {\n        "attribute_code": "price_view",\n        "value": "0"\n      }\n    ]\n  },\n  "saveOptions": true\n}\n')),(0,c.mdx)("h4",{id:"response"},"Response"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 25,\n    "sku": "Desktop-Computer",\n    "name": "Desktop Computer",\n    "attribute_set_id": 4,\n    "price": 0,\n    "status": 1,\n    "visibility": 4,\n    "type_id": "bundle",\n    "created_at": "2022-04-15 18:04:04",\n    "updated_at": "2022-04-15 18:04:04",\n    "weight": 0,\n    "extension_attributes": {\n        "website_ids": [\n            1\n        ],\n        "category_links": [\n            {\n                "position": 0,\n                "category_id": "32"\n            }\n        ],\n        "stock_item": {\n            "item_id": 25,\n            "product_id": 25,\n            "stock_id": 1,\n            "qty": 0,\n            "is_in_stock": true,\n            "is_qty_decimal": false,\n            "show_default_notification_message": false,\n            "use_config_min_qty": true,\n            "min_qty": 0,\n            "use_config_min_sale_qty": 1,\n            "min_sale_qty": 1,\n            "use_config_max_sale_qty": true,\n            "max_sale_qty": 10000,\n            "use_config_backorders": true,\n            "backorders": 0,\n            "use_config_notify_stock_qty": true,\n            "notify_stock_qty": 1,\n            "use_config_qty_increments": true,\n            "qty_increments": 0,\n            "use_config_enable_qty_inc": true,\n            "enable_qty_increments": false,\n            "use_config_manage_stock": true,\n            "manage_stock": true,\n            "low_stock_date": null,\n            "is_decimal_divided": false,\n            "stock_status_changed_auto": 0\n        },\n        "bundle_product_options": [\n            {\n                "option_id": 14,\n                "title": "RAM",\n                "required": true,\n                "type": "select",\n                "position": 1,\n                "sku": "Desktop-Computer",\n                "product_links": [\n                    {\n                        "id": "19",\n                        "sku": "RAM-12GB",\n                        "option_id": 14,\n                        "qty": 1,\n                        "position": 1,\n                        "is_default": false,\n                        "price": 25,\n                        "price_type": null,\n                        "can_change_quantity": 0\n                    },\n                    {\n                        "id": "20",\n                        "sku": "RAM-24GB",\n                        "option_id": 14,\n                        "qty": 1,\n                        "position": 2,\n                        "is_default": false,\n                        "price": 50,\n                        "price_type": null,\n                        "can_change_quantity": 0\n                    }\n                ]\n            },\n            {\n                "option_id": 15,\n                "title": "Monitor",\n                "required": true,\n                "type": "select",\n                "position": 2,\n                "sku": "Desktop-Computer",\n                "product_links": [\n                    {\n                        "id": "21",\n                        "sku": "Monitor-15",\n                        "option_id": 15,\n                        "qty": 1,\n                        "position": 1,\n                        "is_default": false,\n                        "price": 100,\n                        "price_type": null,\n                        "can_change_quantity": 0\n                    },\n                    {\n                        "id": "22",\n                        "sku": "Monitor-17",\n                        "option_id": 15,\n                        "qty": 1,\n                        "position": 2,\n                        "is_default": false,\n                        "price": 150,\n                        "price_type": null,\n                        "can_change_quantity": 0\n                    }\n                ]\n            }\n        ]\n    },\n    "options": [],\n    "media_gallery_entries": [],\n    "custom_attributes": [\n        {\n            "attribute_code": "shipment_type",\n            "value": "0"\n        },\n        {\n            "attribute_code": "options_container",\n            "value": "container2"\n        },\n        {\n            "attribute_code": "msrp_display_actual_price_type",\n            "value": "0"\n        },\n        {\n            "attribute_code": "url_key",\n            "value": "desktop-computer"\n        },\n        {\n            "attribute_code": "price_view",\n            "value": "0"\n        },\n        {\n            "attribute_code": "required_options",\n            "value": "0"\n        },\n        {\n            "attribute_code": "has_options",\n            "value": "0"\n        },\n        {\n            "attribute_code": "sku_type",\n            "value": "0"\n        },\n        {\n            "attribute_code": "price_type",\n            "value": "0"\n        },\n        {\n            "attribute_code": "tax_class_id",\n            "value": "2"\n        },\n        {\n            "attribute_code": "weight_type",\n            "value": "0"\n        },\n        {\n            "attribute_code": "category_ids",\n            "value": [\n                "32"\n            ]\n        }\n    ]\n}\n')),(0,c.mdx)("h2",{id:"verify-this-step"},"Verify this step"),(0,c.mdx)("ol",null,(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"On the Luma storefront page, search for ",(0,c.mdx)("inlineCode",{parentName:"p"},"Desktop Computer"),". There should be one result."),(0,c.mdx)("p",{parentName:"li"},(0,c.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"14.375000000000002%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/5530d/search-desktop-computer.webp 320w","/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/0c8fb/search-desktop-computer.webp 640w","/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/94b1e/search-desktop-computer.webp 1280w","/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/0b34d/search-desktop-computer.webp 1920w","/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/d5269/search-desktop-computer.webp 2560w","/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/48dc3/search-desktop-computer.webp 2824w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/dd4a7/search-desktop-computer.png 320w","/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/0f09e/search-desktop-computer.png 640w","/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/bbbf7/search-desktop-computer.png 1280w","/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/ac7a9/search-desktop-computer.png 1920w","/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/c7a69/search-desktop-computer.png 2560w","/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/dc196/search-desktop-computer.png 2824w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/99249ecc73a1cf403bce39029dbeddf5/bbbf7/search-desktop-computer.png",alt:"Search",title:"Search",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"Click on the Desktop Computer product."),(0,c.mdx)("p",{parentName:"li"},(0,c.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/5530d/site-desktop-computer.webp 320w","/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/0c8fb/site-desktop-computer.webp 640w","/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/94b1e/site-desktop-computer.webp 1280w","/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/0b34d/site-desktop-computer.webp 1920w","/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/d5269/site-desktop-computer.webp 2560w","/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/35171/site-desktop-computer.webp 3724w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/dd4a7/site-desktop-computer.png 320w","/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/0f09e/site-desktop-computer.png 640w","/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/bbbf7/site-desktop-computer.png 1280w","/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/ac7a9/site-desktop-computer.png 1920w","/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/c7a69/site-desktop-computer.png 2560w","/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/735c3/site-desktop-computer.png 3724w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/1d1c1fdfe960140eb459388dec374a76/bbbf7/site-desktop-computer.png",alt:"Product",title:"Product",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"Customize Desktop Computer and add it to the shopping cart."),(0,c.mdx)("p",{parentName:"li"},(0,c.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/5530d/shopping-cart-desktop-computer.webp 320w","/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/0c8fb/shopping-cart-desktop-computer.webp 640w","/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/94b1e/shopping-cart-desktop-computer.webp 1280w","/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/0b34d/shopping-cart-desktop-computer.webp 1920w","/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/d5269/shopping-cart-desktop-computer.webp 2560w","/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/32f2e/shopping-cart-desktop-computer.webp 2752w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/dd4a7/shopping-cart-desktop-computer.png 320w","/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/0f09e/shopping-cart-desktop-computer.png 640w","/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/bbbf7/shopping-cart-desktop-computer.png 1280w","/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/ac7a9/shopping-cart-desktop-computer.png 1920w","/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/c7a69/shopping-cart-desktop-computer.png 2560w","/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/3fb98/shopping-cart-desktop-computer.png 2752w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/f474df63d38384d35dbc2212f6372681/bbbf7/shopping-cart-desktop-computer.png",alt:"Shopping Cart",title:"Shopping Cart",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,c.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,c.mdx)("p",null,"If you do not see the bundle product on the frontend, you can try reindexing and clearing the cache."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-bundle-product-create-bundle-product-md-c605a28686282256d7f2.js.map