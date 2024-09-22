package com.expensehound.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class User {

	@Id
	@Column(name = "username")
	private String username;

	@Column(name = "salt")
	private String salt;

	@Column(name = "hash")
	private String hash;

	public User() {}

	public User(String username, String salt, String hash) {
		this.username = username;
		this.salt = salt;
		this.hash = hash;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public String getHash() {
		return hash;
	}

	public void setHash(String hash) {
		this.hash = hash;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", salt=" + salt + ", hash=" + hash + "]";
	}
}