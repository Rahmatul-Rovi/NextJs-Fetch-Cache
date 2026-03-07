"use client";

import { useRouter } from "next/navigation";

export default function ProductAddForm() {
  const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const from = e.target;
        const productName = e.productName.value;
        const payload = {productName};
        const res = await fetch("http://localhost:3000/api/items", {
          method: POST,
          body: JSON.stringify(payload),
          headers: {
            "content-type": "application/json"
          }
        });
        const result = await res.json();
        console.log(result);
        form.reset();
       // alert("Product Added");
       router.push('products')
       router.refresh()
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder='Product Name' />
        <button type='submit'> Submit </button>
      </form>
    </div>
  )
}
