import{j as e,F as h,a as l,L as i}from"./app-1954d829.js";import{r}from"./index-54598967.js";/* empty css            */function b({categories:d,brands:c,cart:t,auth:o}){console.log(t),o.user.id;const s=t.product.price*t.qty,m=d.find(n=>n.id===t.product.category_id).name,p=c.find(n=>n.id===t.product.brand_id).name,a=10;return e(h,{children:[l("div",{children:l("div",{className:"absolute top-[50%] z-20 left-[50%] translate-x-[-50%] translate-y-[-50%]",id:"chec-div",children:l("div",{className:"",id:"checkout",children:e("div",{className:"flex md:flex-row flex-col justify-end",id:"cart",children:[e("div",{className:"lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-base-300 overflow-y-auto shadow-md overflow-x-hidden h-screen",id:"scroll",children:[e(i,{href:r("browse.product",t.product_id),className:"flex items-center text-gray-500 hover:text-gray-600 cursor-pointer",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-left",width:16,height:16,viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[l("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l("polyline",{points:"15 6 9 12 15 18"})]}),l("p",{className:"text-sm pl-2 leading-none",children:"Back"})]}),l("p",{className:"text-5xl font-black leading-10 pt-3",children:"Cart"}),e("div",{className:"md:flex items-center py-8 border-t border-gray-200",children:[l("div",{className:"w-1/4",children:l("img",{src:`/storage/${t.product.image}`,alt:t.product.name,className:"w-full h-full object-center object-cover"})}),e("div",{className:"md:pl-3 md:w-3/4 w-full",children:[l("div",{className:"flex items-center justify-between w-full pt-1",children:e("div",{className:"flex gap-5 justify-between px-3",children:[l("p",{className:"text-base font-black leading-none ",children:t.product.name}),e("p",{className:"text-base font-black leading-none ",children:["x ",l("span",{className:"text-primary",children:t.qty})]})]})}),e("p",{className:"text-xs leading-3 text-gray-600 pt-2",children:["Category: ",m]}),e("p",{className:"text-xs leading-3 text-gray-600 py-4",children:["Brand: ",p]}),l("div",{className:"flex items-center justify-between pt-5 pr-6",children:e("p",{className:"ml-auto text-base font-semibold leading-none ",children:[`$${t.product.price} x ${t.qty}`,e("span",{className:"text-primary",children:[" = $",t.product.price*t.qty]})]})})]})]})]}),l("div",{className:"xl:w-1/2 md:w-1/3 xs:w-1/4 w-full bg-base-200 shadow-lg shadow-gray-900 h-full",children:e("div",{className:"flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto",children:[e("div",{children:[l("p",{className:"text-4xl font-black leading-9 ",children:"Summary"}),e("div",{className:"flex items-center justify-between pt-16",children:[l("p",{className:"text-base leading-none ",children:"Subtotal"}),e("p",{className:"text-base leading-none ",children:["$",s]})]}),e("div",{className:"flex items-center justify-between pt-5",children:[l("p",{className:"text-base leading-none ",children:"Shipping"}),e("p",{className:"text-base leading-none ",children:["$",a]})]})]}),e("div",{children:[e("div",{className:"flex items-center pb-6 justify-between lg:pt-5 pt-20",children:[l("p",{className:"text-2xl leading-normal ",children:"Total"}),e("p",{className:"text-2xl font-bold leading-normal text-right ",children:["$",s+a]})]}),l(i,{href:r("checkout.product.confirm"),as:"button",method:"POST",data:{cartItem:t,shipping:a},className:"btn btn-primary w-full rounded",children:"Checkout"})]})]})})]})})})}),l("style",{children:` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`})]})}export{b as default};