<template>
<div>
      <Header></Header>
      <UnderHead></UnderHead>
      <Items></Items>
      <FooterOne></FooterOne>
      <FooterTwo></FooterTwo>
</div>
</template>

<script>
import Header from './components/Header';
import UnderHead from './components/UnderHead';
import Items from './components/Items';
import FooterOne from './components/FooterOne';
import FooterTwo from './components/FooterTwo';
export default {
  components:{
    Header,
    UnderHead,
    Items,
    FooterOne,
    FooterTwo
  }
}
</script>
