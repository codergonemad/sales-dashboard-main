package com.example.sales.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.sales.bean.*;

public interface ProductRepository extends JpaRepository<Product,Integer>{
    // Product fingByName(String productName);
}
