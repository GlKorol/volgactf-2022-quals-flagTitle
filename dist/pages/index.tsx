import Head from 'next/head'
import React from "react";
import { useCallback, useEffect, useState } from 'react'
import {decode, encode} from 'base-64';


export default function Home(): JSX.Element {
  let a1 = "4oCcV2lubmluZyBpZ25pdGVzIGEgc2VsZi1jb25zY2lvdXMgYXdhcmVuZXNzIHRoYXQgb3RoZXJzIGFyZSA=";
  let a2 = "d2F0Y2hpbmcuIEl04oCZcyBhIGxvdCBlYXNpZXIgdG8gbW92ZSB1bmRlciB0aGUgcmFkYXIgd2hlbiBubyBvbmU=";
  let a3 = "d2F0Y2hpbmcuIEl04oCZcyBhIGxvdCBlYXNpZXIgdG8gbW92ZSB1bmRlciB0aGUgcmFkYXIgd2hlbiBubyBvbmU=";
  let a4 = "YmUgcm91Z2ggYW5kIGdldCBkaXJ0eSBiZWNhdXNlIG5vIG9uZSBldmVuIGtub3dzIHlvdeKAmXJlIHRoZXJlLiA=";
  let a5 =  "QnV0IGFzIHNvb24gYXMgeW91IHN0YXJ0IHRvIHdpbiwgYW5kIG90aGVycyBzdGFydCB0byBub3RpY2UsIHlvdeKAmXJl";
  let a6 = "c3VkZGVubHkgYXdhcmUgdGhhdCB5b3XigJlyZSBiZWluZyBvYnNlcnZlZC4gWW914oCZcmUgYmVpbmcganVkZ2VkLiA=";
  let a7 = "WW91IHdvcnJ5IHRoYXQgb3RoZXJzIHdpbGwgZGlzY292ZXIgeW91ciBmbGF3cyBhbmQgd2Vha25lc3Nlcyw=";
  let a8 = "YW5kIHlvdSBzdGFydCBoaWRpbmcgeW91ciB0cnVlIHBlcnNvbmFsaXR5LCBzbyB5b3UgY2FuIGJlIGEgZ29vZCA=";
  let a9 = "cm9sZSBtb2RlbCBhbmQgZ29vZCBjaXRpemVuIGFuZCBWb2xnYUNURntEWU40TTFDXzcxN0wz";
  let a10 = "X1IzNEM3XzQ4MzF9IGEgbGVhZGVyIHRoYXQgb3RoZXJzIGNhbiByZXNwZWN0LiBUaGVyZSBpcyBub3RoaW5n";
  let a11 = "d3Jvbmcgd2l0aCB0aGF0LiBCdXQgaWYgeW91IGRvIGl0IGF0IHRoZSBleHBlbnNlIG9mIGJlaW5nIHdobyB5b3Ug";
  let a12 = "cmVhbGx5IGFyZSwgbWFraW5nIGRlY2lzaW9ucyB0aGF0IHBsZWFzZSBvdGhlcnMgaW5zdGVhZCBvZiBwbGVhc2luZw==";
  let a13 = "eW91cnNlbGYsIHlvdeKAmXJlIG5vdCBnb2luZyB0byBiZSBpbiB0aGF0IHBvc2l0aW9uIHZlcnkgbG9uZy7igJ0=";
  let a14 = "4oCVwqBUaW0gUy4gR3JvdmVyLMKgV2lubmluZzogVGhlIFVuZm9yZ2l2aW5nIFJhY2UgdG8gR3JlYXRuZXNz";
  const data = decode(a1)+decode(a2)+decode(a3)+decode(a4)+decode(a5)+decode(a6)+decode(a7)+decode(a8)+decode(a9)+decode(a10)+decode(a11)+decode(a12)+decode(a13)+decode(a14)
  const myData:string[] = data.split('');
  //const myData:string[] = 'my_flag_is_alive'.split('');
  const [count, setCount] = useState(0)
  const get_char_code = useCallback(() => {
    setCount((v) => v+1);



  }, [setCount])


  useEffect(() => {
    const r = setInterval(() => {
      get_char_code()
    }, 1000)
    return () => {
      clearInterval(r)
    }
  }, [get_char_code])
  const char: string = String.fromCharCode(myData[(count) % myData.length].charCodeAt(0))
  return (
      <>
        <Head>
          <title>{char}</title>
        </Head>
      </>
  );

}
