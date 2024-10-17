package com.expensehound.backend.utils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Claims;

import javax.crypto.spec.SecretKeySpec;

import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {

	private String jwtSecret = "some-secret-key";
	private final long jwtExpirationMs = 86400000; // 24 hours

	// Generate the signing key
	private Key getSigningKey() {
		byte[] keyBytes = jwtSecret.getBytes();
		return new SecretKeySpec(keyBytes, SignatureAlgorithm.HS512.getJcaName());
	}

	public String generateJwtToken(String username) {
		return Jwts.builder().setSubject(username).setIssuedAt(new Date())
				.setExpiration(new Date(new Date().getTime() + jwtExpirationMs))
				.signWith(getSigningKey(), SignatureAlgorithm.HS512) // Updated to use the Key
				.compact();
	}

	public Claims getClaimsFromToken(String token) {
		return Jwts.parserBuilder().setSigningKey(getSigningKey()) // Updated to use the Key
				.build().parseClaimsJws(token).getBody();
	}

	public boolean validateJwtToken(String token) {
		try {
			Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}