package com.albou.book.history;

import com.albou.book.book.Book;
import com.albou.book.common.BaseEntity;
import com.albou.book.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class BookTransactionHistory extends BaseEntity {

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user; // recordar hacer la otra cara en userr
    @ManyToOne
    @JoinColumn(name="book_id")
    private Book book;

    private boolean returned;
    private boolean returnApproved;
}
