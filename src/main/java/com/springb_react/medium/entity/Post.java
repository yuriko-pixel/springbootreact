package com.springb_react.medium.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Data
@Entity
@Table(name = "springblog")
public class Post {

	@Id
	@Column(name = "id")
	private int id;

	@Column(name = "title")
	private String title;

	@Column(name = "content")
	private String content;

	@Column(name = "html")
	private String html;

	@Column(name = "headerimg")
	private String headerimg;

	@Column(name = "postdate")
	private Date postdate;

	@Column(name = "tag")
	private String tag;


	@Column(name = "author")
	private String author;

	public String setDateFormat() {
	    SimpleDateFormat format2 = new SimpleDateFormat("yyyy/MM/dd日 E H:mm");
	    return format2.format(postdate);
	}

	public Post(@JsonProperty("title") String title,
				@JsonProperty("content") String content,
				@JsonProperty("html") String html,
				@JsonProperty("headerimg") String headerimg
				) {
		this.id = 2;
		this.title = title;
		this.content = content;
		this.html = html;
		this.headerimg = headerimg;
		this.postdate = new Date();
		this.author = "Yuriko";
	}
}