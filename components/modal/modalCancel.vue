<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th>상품명</th>
          <td>{{ paymentData.goodsName }}</td>
        </tr>
        <tr>
          <th>결제번호</th>
          <td>{{ paymentData.paymentIdx }}</td>
        </tr>
        <tr>
          <th>결제금액</th>
          <td>{{ `${paymentData.paymentPrice.toLocaleString()}원` }}</td>
        </tr>
        <tr>
          <th>배송비</th>
          <td>
            {{
              paymentData.shippingOnline === true
                ? "0원"
                : `${paymentData.shippingFee.toLocaleString()}원`
            }}
          </td>
        </tr>
        <tr>
          <th>주문상태</th>
          <td>{{ paymentData.paymentStatus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ["paymentData"]
  }
</script>

<style scoped>
  table {
    border-collapse: collapse;
    display: table-cell;
    width: 576px;
  }
  tr {
    border-bottom: 1px solid #ececec;
    font-size: 14px;
  }
  th {
    color: #212121;
    font-weight: bold;
    width: 108px;
    height: 42px;
    vertical-align: middle;
    text-align: left;
    padding: 11px 0;
  }
  td {
    vertical-align: middle;
    width: 468px;
    color: #666666;
    padding: 11px 0;
  }
</style>
