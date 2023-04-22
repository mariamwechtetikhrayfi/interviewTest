package com.kata.foobarquix

import com.kata.foobarquix.services.FooBarQuixService
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class FooBarQuixApplicationTests {

	@Test
	@kotlin.Throws(Exception::class)
	fun contextLoads() {
		val fooBarQuixService = FooBarQuixService()
		assertEquals(fooBarQuixService.convertNumber(1), "1")

		// Basic
		assertEquals(fooBarQuixService.convertNumber(3), "FOOFOO")
		assertEquals(fooBarQuixService.convertNumber(5), "BARBAR")
		assertEquals(fooBarQuixService.convertNumber(7), "QIXQIX")

		// Advanced
		assertEquals(fooBarQuixService.convertNumber(13), "FOO")
		assertEquals(fooBarQuixService.convertNumber(15), "FOOBARBAR")
		assertEquals(fooBarQuixService.convertNumber(33), "FOOFOOFOO")

		// Divisors should have high precedence
		assertEquals(fooBarQuixService.convertNumber(51), "FOOBAR")

		// The content sould be analysed in the order they appear
		assertEquals(fooBarQuixService.convertNumber(53), "BARFOO")
	}

}
