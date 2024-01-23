package com.re.boardback.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="search_log")
@Table(name="search_log")
public class SearchLogEntity {

    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int sequence;
    private String searchWord;
    private String relationWord;
    private boolean relation;
    
}
