package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

    /*    fun convertNumber(inputNumber: Int): String {
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


     */
    fun convertNumber(inputNumber: Int): String {
        var result = ""
        val fooBarQuixMap = mapOf(3 to "FOO", 5 to "BAR", 7 to "QIX")
         result += applyDivisiblityRules(inputNumber, fooBarQuixMap)
         result += applyDigitRules(inputNumber, fooBarQuixMap)
        return if (result.isEmpty()) inputNumber.toString()
        else result
    }

    fun applyDivisiblityRules(inputNumber: Int, fooBarQixMap: Map<Int, String>): String {
        var result = ""
        fooBarQixMap.keys.forEach {
            if (inputNumber % it == 0) {
                result += fooBarQixMap[it]
            }
        }
        return result
    }

    fun applyDigitRules(inputNumber: Int, fooBarQixMap: Map<Int, String>): String {
        var result = ""
        inputNumber.toString().forEach {
            fooBarQixMap[it.toString().toInt()]?.let {
                result += it
            }
        }
        return result
    }
}