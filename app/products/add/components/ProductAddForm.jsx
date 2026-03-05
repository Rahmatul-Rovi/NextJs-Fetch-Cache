"use client";

export default function ProductAddForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
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
