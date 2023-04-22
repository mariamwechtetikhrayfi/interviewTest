package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
        var result = ""
        if (inputNumber % 3 === 0) {
            result += "FOO"
        }
        if (inputNumber % 5 === 0) {
            result += "BAR"
        }
        if (inputNumber % 7 === 0) {
            result += "QIX"
        }
        val toFooBar: String = inputNumber.toString()
        for (j in 0 until toFooBar.length) {
            val element: Char = toFooBar.get(j)
            if (element == '3') result += "FOO"
            if (element == '5') result += "BAR"
            if (element == '7') result += "QIX"
        }
        return if (result.isEmpty()) toFooBar else result
    }

}