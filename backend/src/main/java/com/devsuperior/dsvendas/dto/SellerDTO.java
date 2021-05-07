package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;

import java.io.Serializable;

public class SellerDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private long id;
    private String name;

    public SellerDTO () {

    }

    public SellerDTO(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public SellerDTO(Seller entity) {
        id = entity.getId();
        name = entity.getName();
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
