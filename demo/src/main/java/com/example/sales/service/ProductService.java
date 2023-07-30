package com.example.sales.service;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.sales.bean.*;
import com.example.sales.repository.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts()
    {
        List<Product> list=productRepository.findAll();
        Collections.sort(list, new Comparator<Product>(){
            public int compare(Product p1,Product p2){
                return p1.getProductId()-p2.getProductId();
            }
        });
        return list;
    }
    public Product addNewProduct (Product product)
    {
        return productRepository.save(product);
    }
    public String deleteProduct(int id)
    {
        productRepository.deleteById(id);
        return "Product removed"+id;
    }
    public Product updateProduct(Product product)
    {
        Product exiProduct=productRepository.findById(product.getProductId()).orElse(null);
        exiProduct.setProductName(product.getProductName());
        exiProduct.setProductCost(product.getProductCost());
        exiProduct.setSerialNo(product.getSerialNo());
        return productRepository.save(exiProduct);
    }
    public Product getProductByName(String productName)
    {
         List<Product> list=productRepository.findAll();
         for(Product p:list)
         {
            if(p.getProductName().equals(productName)){
                return p;
            }    
         }
         return null;
    }
    public int sumProduct()
    {
        List<Product> list=productRepository.findAll();
        int sum=0;
        for(Product p:list)
        {
            sum+=p.getProductCost();
        }
        return sum;
    }
    public int sumBought()
    {
        List<Product> list=productRepository.findAll();
        int sum=0;
        for(Product p:list)
        {
            sum+=p.getBoughtPrice();
        }
        return sum;
    }
    public int totalProduct()
    {
        List<Product> list=productRepository.findAll();
        int sum=0;
        for(Product p:list)
        {
            sum+=p.getSerialNo();
        }
        return sum;
    }
    public String[] popularProduct()
    {
        List<Product> list=productRepository.findAll();
        String ans[]=new String[list.size()];
        Collections.sort(list, new Comparator<Product>(){
            public int compare(Product p1,Product p2){
                return p2.getSerialNo()-p1.getSerialNo();
            }
        });
        for(int i=0;i<ans.length;i++)
        {
            ans[i]=list.get(i).getProductName();
        }
        return ans;
    }
    public int[] lineChart(){
        int[] arr=new int[12];
        List<Product> list=productRepository.findAll();
        for(Product p:list)
        {
           String s=""+p.getDate();
           String dateParts[]=s.split("-");
           int month=Integer.parseInt(dateParts[1]);
           arr[month]=arr[month]+p.getSerialNo();
           System.out.println(arr[month]);
        }
        return arr;
    }
    public int totalInventory(){
        List<Product> list=productRepository.findAll();
        int sum=0;
        for(Product p:list)
        {
            sum+=p.getUnitsSold();
        }
        return sum;
    }
}
