import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1040px;
  margin-top: 25px;
  margin-right: 32px;
  box-sizing: border-box;
  line-height: 1.6;
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  color: #212529;
  font-family:sans-serif;
`;

const ItemTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  display: table;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
  box-sizing: border-box;
`;

const ItemThead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

const ItemFirstTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const ItemDetailsTh = styled.th`
  font-weight: 600px;
  text-align: inherit;
  display: table-cell;
  width: 50%;
  color: #222;
  background-color: #fff;
  text-transform: uppercase;
  font-size: 11px;
  padding: 8px 10px;
  border-color: #eee;
  border: 1px solid #ccc;
  vertical-align: top;
  min-width: 370px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:first-child { 
    border-left-color: transparent;
  }
`;

const QuantityTh = styled.th`
  color: #222;
  background-color: #fff;
  text-transform: uppercase;
  font-size: 11px;
  width: 8.5px;
  padding: 8px 10px;
  border-color: #eee;
  border: 1px solid #ccc;
  vertical-align: top;
  min-width: 90px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right!important;
`;

const RateTh = styled.th`
  color: #222;
  background-color: #fff;
  text-transform: uppercase;
  font-size: 11px;
  width: 10%;
  padding: 8px 10px;
  border-color: #eee;
  border: 1px solid #ccc;
  vertical-align: top;
  min-width: 105px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right!important;
`;

const DiscountTh = styled.th`
  color: #222;
  background-color: #fff;
  text-transform: uppercase;
  font-size: 11px;
  width: 9.5%;
  padding: 8px 10px;
  border-color: #eee;
  border: 1px solid #ccc;
  vertical-align: top;
  min-width: 105px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right!important;
`;

const AmountTh = styled.th`
  color: #222;
  background-color: #fff;
  text-transform: uppercase;
  font-size: 11px;
  border-right-color: transparent;
  width: 11%;
  padding: 8px 10px;
  border-color: #eee;
  border: 1px solid #ccc;
  vertical-align: top;
  min-width: 115px;
  text-align: right!important;
`;

const ItemTbody = styled.tbody`
  margin-bottom: 13px;
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const ItemSecondTr = styled.tr`
  opacity: 1;
  margin-left: -20px;
  padding-left: 20px;
  transition: opacity 0.3s linear;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  user-select: none;
`;

const ItemSecondTrLeft = styled.div`
  width: 100%;
`;

const ItemImageTd = styled.td`
  border-left-color: transparent;
  border-color: #eee;
  width: 100px;
  padding: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  vertical-align: top;
  text-align: center;
  display: table-cell;
`;

const ItemImage = styled.img`
  height: 32px;
  width: 32px;
  fill: #ddd;
  vertical-align: baseline;
  overflow: hidden;
  text-align: center;
`;

const ItemSelectionTd = styled.td`
  border-color: #eee;
  padding: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  vertical-align: top;
  display: table-cell;
  width: 450px;
`;

const TextSpan = styled.span`
  width: 425px;
  float: left!important;
`;

const ItemTextArea = styled.textarea`
  border: 1px solid transparent;
  box-shadow: none;
  resize: none;
  height: auto;
  padding: 5px 8px;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.6;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  transition: border-color 0.15s ease-in-out, border-shadow 0.15s ease-in-out;
  font-weight: 400;
  margin: 0;
  font-family: inherit;
  overflow: auto;
  text-rendering: auto;
  writing-mode: horizontal-tb!important;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  appearance: textarea;
  -webkit-rtl-ordering: logical;
  flex-direction: column;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font: 400 13.3333px Arial;
`;

const QuantityNumberTd = styled.td`
  width: 8.5%;
  border-color: #eee;
  padding: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  vertical-align: top;
  min-width: 90px;
  display: table-cell;
`;

const QuantityNumber = styled.input`
  border: 1px solid transparent;
  box-shadow: none;
  border-left: none;
  padding: 5px 8px;
  text-align: right!important;
  display: block;
  width: 105px;
  height: 32px;
  font-size: 1rem;
  line-height: 1.6;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-weight: 400;
  margin: 0;
  font-family: inherit;
  overflow: visible;
  writing-mode: horizontal-tb!important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  appearance: textfield;
  font: 400 13.3333px Arial;
`;

const PriceNumberTd = styled.td`
  width: 10%;
  border-color: #eee;
  padding: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  vertical-align: top;
  min-width: 105px;
  display: table-cell;
`;

const PriceNumber = styled.input`
  border: 1px solid transparent;
  box-shadow: none;
  border-left: none;
  padding: 5px 8px;
  text-align: right!important;
  display: block;
  width: 110px;
  height: 32px;
  font-size: 1rem;
  line-height: 1.6;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-weight: 400;
  margin: 0;
  font-family: inherit;
  overflow: visible;
  writing-mode: horizontal-tb!important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  appearance: textfield;
  font: 400 13.3333px Arial;
`;

const DiscountNumberTd = styled.td`
  width: 9.5%;
  border-color: #eee;
  padding: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  vertical-align: top;
  min-width: 105px;
  display: table-cell;
`;

const DiscountNumber = styled.input`
  border: 1px solid transparent;
  box-shadow: none;
  border-radius: 2px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;
  flex: 1 1 auto;
  width: 40px;
  margin-bottom: 0;
  padding: 5px 8px;
  text-align: right!important;
  display: block;
  height: 32px;
  font-size: 1rem;
  line-height: 1.6;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-weight: 400;
  margin: 0;
  font-family: inherit;
  overflow: visible;
  writing-mode: horizontal-tb!important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  appearance: textfield;
  cursor: text;
  font: 400 13.3333px Arial;
`;

const DiscountDropdown = styled.div`
  margin-left: -1px;
  display: flex;
  position: relative;
`;

const DiscountDropdownMenu = styled.div`
  left: auto;
  right: 0;
  position: absolute;
  top: 100%;
  display: none;
  z-index: 1000;
  display: none;
  float: left;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  min-width: 100%;
  background-clip: padding-box;
`;

const DiscountDropdownButton = styled.button`
  background-color: #fbfbfb;
  border-radius: 0;
  border: 1px solid #f3f3f3;
  margin: 2px;
  font-size: 11px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  appearance: none;
  color: #212529;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  line-height: 1.6;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-weight: 400;
  white-space: nowrap;
  text-transform: none;
  font-family: inherit;
  overflow: visible;
  writing-mode: horizontal-tb!important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  align-items: flex-start;
  font: 400 13.3333px Arial;
  position: absolute;
  top: -40px;
  left: 75px;
  &:active, :focus {
    .dropdown-menu {
      display: block;
    }
  }
  &::after {
    display: inline-block;
    margin-left: 0.225em;
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
    vertical-align: 0.225em;
    content: "";
    box-sizing: border-box;
  }
`;

const OrderedItemsTable = () => {
  return (
    <Wrapper>
      <ItemTable>
        <ItemThead>
          <ItemFirstTr>
            <ItemDetailsTh>Item Details</ItemDetailsTh>
            <QuantityTh>QUANTITY</QuantityTh>
            <RateTh>RATE</RateTh>
            <DiscountTh>DISCOUNT</DiscountTh>
            <AmountTh>AMOUNT</AmountTh>
          </ItemFirstTr>
        </ItemThead>
        <ItemTbody>
          <ItemSecondTr draggable="true">
            <ItemSecondTrLeft>
              <ItemImageTd>
                <ItemImage src='../../../../../../assets/images/Item-image.png' alt=""></ItemImage>
              </ItemImageTd>
              <ItemSelectionTd>  
                <TextSpan>
                  <ItemTextArea placeholder="Type or click to select an item."></ItemTextArea>
                </TextSpan>
              </ItemSelectionTd>
            </ItemSecondTrLeft>
            <QuantityNumberTd>
              <QuantityNumber type="text" placeholder="1.00"></QuantityNumber>
            </QuantityNumberTd>
            <PriceNumberTd>
              <PriceNumber placeholder="0.00"></PriceNumber>
            </PriceNumberTd>
            <DiscountNumberTd>
              <DiscountNumber placeholder="0"></DiscountNumber>
              <DiscountDropdown>
                <DiscountDropdownButton>
                  %
                  <DiscountDropdownMenu className="dropdown-menu"></DiscountDropdownMenu>
                </DiscountDropdownButton>
              </DiscountDropdown>
            </DiscountNumberTd>
          </ItemSecondTr>
        </ItemTbody>
      </ItemTable>
    </Wrapper>
  )
}

export default OrderedItemsTable;