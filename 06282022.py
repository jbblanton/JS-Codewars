# // Day 43
# //*******************************

# // Kata: Moves in squared strings (I)

# // This kata is the first of a sequence of four about "Squared Strings".

# // You are given a string of n lines, each substring being n characters long: For example:

# // s = "abcd\nefgh\nijkl\nmnop"

# // We will study some transformations of this square of strings.

# // Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
# // vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
# // Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
# //  hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
# // or printed:

# // vertical mirror   |horizontal mirror   
# // abcd --> dcba     |abcd --> mnop 
# // efgh     hgfe     |efgh     ijkl 
# // ijkl     lkji     |ijkl     efgh 
# // mnop     ponm     |mnop     abcd 
# // Task:
# // Write these two functions
# // and

# // high-order function oper(fct, s) where

# // fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

# // Examples:
# // s = "abcd\nefgh\nijkl\nmnop"
# // oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
# // oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

def vert_mirror(strng):
    # split str on \n
    # reverse each ele
    # join and return
    arr = strng.split('\n')
    arr2 = []
    for ele in arr:
        arr2.append(ele[::-1])
    print(arr2)
    st = '\n'.join(arr2)
    return st
    
def hor_mirror(strng):
    # split string on \n
    # reverse arr, join and return
    
    arr = strng.split('\n')
    arr.reverse()
    st = '\n'.join(arr)
    return st
    
def oper(fct, s):
    if fct == vert_mirror:
        return vert_mirror(s)
    else:
        return hor_mirror(s)

# /* ----------------------------------------------------------------------- */

# // Kata: Moves in squared strings (II)

# // You are given a string of n lines, each substring being n characters long: For example:

# // s = "abcd\nefgh\nijkl\nmnop"

# // We will study some transformations of this square of strings.

# // Clock rotation 180 degrees: rot
# // rot(s) => "ponm\nlkji\nhgfe\ndcba"
# // selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string obtained by clock rotation 180 degrees with dots interspersed in order (hopefully) to better show the rotation when printed.
# // s = "abcd\nefgh\nijkl\nmnop" --> 
# // "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
# // or printed:
# // |rotation        |selfie_and_rot
# // |abcd --> ponm   |abcd --> abcd....
# // |efgh     lkji   |efgh     efgh....
# // |ijkl     hgfe   |ijkl     ijkl....   
# // |mnop     dcba   |mnop     mnop....
# //                            ....ponm
# //                            ....lkji
# //                            ....hgfe
# //                            ....dcba
# // Notice that the number of dots is the common length of "abcd", "efgh", "ijkl", "mnop".

# // Task:
# // Write these two functions rotand selfie_and_rot
# // and

# // high-order function oper(fct, s) where

# // fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)

def rot(strng):
    # split on \n
    # reverse the eles
    # reverse the array
    # join and return
    
    arr = strng.split('\n')
    arr2 = []
    for ele in arr:
        arr2.append(ele[::-1])
    arr2.reverse()
    return '\n'.join(arr2)
    
def selfie_and_rot(strng):
    # use rot() for 2nd half
    # split on \n and insert ... to first and then second
    # join and return
    
    first = strng.split('\n')
    
    dots = '.' * (len(first[0]))
    
    last = f'\n{dots}'.join(rot(strng).split('\n'))
    
    first = f'{dots}\n'.join(first)
    
    return first + f'{dots}\n{dots}' + last                        
    
    
def oper(fct, s):
    if fct == rot:
        return rot(s)
    else:
        return selfie_and_rot(s)