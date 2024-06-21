package com.expense_hound.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expense_hound.backend.entity.User;

@Repository public interface UserRepository extends JpaRepository<User, Integer> {
}