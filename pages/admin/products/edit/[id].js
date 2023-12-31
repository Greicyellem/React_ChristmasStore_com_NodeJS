// pages/products/[id].js
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import 'tailwindcss/tailwind.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { fetchProduct, updateProduct } from '@/app/utils/api'; // Importe as funções fetchProduct e updateProduct

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const { register, handleSubmit, setValue } = useForm();
  const [product, setProduct] = useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const productData = await fetchProduct(id);
        setProduct(productData);
        setValue('title', productData.title);
        setValue('price', productData.price);
        setValue('description', productData.description);
        setValue('category', productData.category);
        setValue('image', productData.image);
      }
    };

    getProduct();
  }, [id]);

  const onSubmit = async (data) => {
    const success = await updateProduct(id, data);
    if (success) {
      router.push(`/products`);
    }
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <main className="">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
    <h1 className="text-2xl font-bold mb-4 text-dark-green">Editar Produto</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8">
        <label htmlFor="title" className="block text-sm font-medium text-dark-green">Título</label>
        <input {...register('title')} className="w-full border rounded py-2 px-3" />
      </div>
      <div className="mb-8">
        <label htmlFor="price" className="block text-sm font-medium text-dark-green">Preço</label>
        <input {...register('price')} className="w-full border rounded py-2 px-3" />
      </div>
      <div className="mb-8">
        <label htmlFor="description" className="block text-sm font-medium text-dark-green">Descrição</label>
        <textarea {...register('description')} className="w-full border rounded py-2 px-3" />
      </div>
      <div className="mb-8">
        <label htmlFor="category" className="block text-sm font-medium text-dark-green">Categoria</label>
        <input {...register('category')} className="w-full border rounded py-2 px-3" />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-dark-green">Imagem</label>
        <input {...register('image')} className="w-full border rounded py-2 px-3" />
      </div>
      <button type="submit" className="bg-dark-green text-white font-semibold py-2 px-4 rounded hover:bg-dark-red">Salvar</button>
    </form>
  </div>
    <Bottom></Bottom>
</main>
  );
};

export default EditProduct;
