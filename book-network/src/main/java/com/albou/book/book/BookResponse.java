package com.albou.book.book;

import lombok.*;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor @Builder
public class BookResponse {
    private Integer id;
    private String title;
    private String authorName;
    private String isbn;
    private String synopsis;
    private String owner;
    private byte[] cover;
    private double rate; // Ver modificación en Book para sacar el puntaje redondeado.
    private boolean archived;
    private boolean shareable;
}
