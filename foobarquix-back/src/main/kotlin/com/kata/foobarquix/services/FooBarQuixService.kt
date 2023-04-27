package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
        var result = ""
        if (inputNumber % 3 == 0) result += "FOO"
        if (inputNumber % 5 == 0) result += "BAR"
        if (inputNumber % 7 == 0) result += "QIX"
        inputNumber.toString().forEach {
            when (it) {
                '3' -> result += "FOO"
                '5' -> result += "BAR"
                '7' -> result += "QIX"
            }
        }
        return if (result.isEmpty()) inputNumber.toString() else result
    }
}