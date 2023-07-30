package com.example.sales.bean;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="product")
public class Product {
    @Id
    private int productId;
    private int serialNo;
    private String productName;
    private int productCost;
    private int boughtPrice;
    private int unitsSold;
    private Date date;
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public int getUnitsSold() {
        return unitsSold;
    }
    public void setUnitsSold(int unitsSold) {
        this.unitsSold = unitsSold;
    }
    public int getBoughtPrice() {
        return boughtPrice;
    }
    public void setBoughtPrice(int boughtPrice) {
        this.boughtPrice = boughtPrice;
    }
    public Product(){}
    public int getProductId() {
        return productId;
    }
    public Product(String productName) {
        this.productName = productName;
    }
    public Product(int productId, int serialNo, String productName, int productCost,int boughtPrice,int unitsSold,Date date) {
        this.productId = productId;
        this.serialNo = serialNo;
        this.productName = productName;
        this.productCost = productCost;
    }
    public void setProductId(int productId) {
        this.productId = productId;
    }
    public int getSerialNo() {
        return serialNo;
    }
    public void setSerialNo(int serialNo) {
        this.serialNo = serialNo;
    }
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public int getProductCost() {
        return productCost;
    }
    public void setProductCost(int productCost) {
        this.productCost = productCost;
    } 
}
