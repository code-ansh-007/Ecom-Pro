import{a as i,j as s,F as l}from"./app-1954d829.js";import{D as d}from"./DashboardLayout-c17ad990.js";import{P as m}from"./ProductCard-f25d5a10.js";/* empty css            */import"./CommonLayout-8bf6eb1f.js";import"./index-54598967.js";import"./index.esm-40633e48.js";import"./Rating-edc17e77.js";function F({categories:a,auth:t,favorites:r,carts:e}){return i(d,{pageTitle:"Favorites",categories:a,auth:t,children:i("div",{children:r.length===0?i("div",{className:"text-lg text-primary text-center font-semibold mt-12",children:"Nothing to show in favorites"}):s(l,{children:[i("div",{className:"text-lg text-primary text-center font-semibold my-5 ",children:"Favorite Products"}),i("div",{className:"grid xl:grid-cols-10 lg:grid-cols-12 mini-tab:grid-cols-2 xs:grid-cols-1 gap-5",children:r.map(o=>i("div",{className:"xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-1",children:i(m,{carts:e,favorites:r,auth:t,product:o})},o.id))})]})})})}export{F as default};