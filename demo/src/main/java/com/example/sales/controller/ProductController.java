package com.example.sales.controller;
import com.example.sales.bean.*;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.sales.service.*;
@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductService productService;

    @RequestMapping("/")
    public String hello(){
        return "Hey";
    }
    @GetMapping("/lineChart")
    public int[] lineChart(){
        return productService.lineChart();
    }
    @GetMapping("/popularProduct")
    public String[] popularProduct(){
        return productService.popularProduct();
    }
    @GetMapping("/totalProduct")
    public int totalProduct()
    {
        return productService.totalProduct();
    }
    @GetMapping("/sumBought")
    public int sumBought()
    {
        return productService.sumBought();
    }
    @GetMapping("/sumProduct")
    public int sumProduct()
    {
        return productService.sumProduct();
    }
    @GetMapping("/totalInventory")
    public int totalInventory(){
        return productService.totalInventory();
    }
    @GetMapping("/listProduct")
    public List<Product> listAllProduct()
    {
        List<Product> listOfProducts=productService.getAllProducts();
        return listOfProducts;
    }
    @GetMapping("/listProduct/{productName}")
    public Product findProductByName(@PathVariable String productName)
    {
        System.out.println(productName);
        return productService.getProductByName(productName);
    }
    @PostMapping("/addProduct")
    public Product registerProduct(@RequestBody Product product)
    {
        Product newProduct=productService.addNewProduct(product);
        return newProduct;
    }
    @PutMapping("/updateProduct")
    public Product updateProduct(@RequestBody Product product)
    {
        return productService.updateProduct(product);
    }
    @DeleteMapping("/deleteProduct/{id}")
    public String deleteString(@PathVariable int id)
    {
        return productService.deleteProduct(id);
    }

}
