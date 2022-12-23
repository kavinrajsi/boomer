.page-account{
    max-width: var(--content-width);
    margin-top: 60px;
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 24px;
    .account-card{
      &-title{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 8px;
        font-weight: 500;
      }
      &-detail{
        padding-bottom: 12px;
        margin-bottom: 12px;
        // border-bottom: 1px solid var(--color-white);
      }
      &-button{
        font-weight: 600;
      }
    }
  
    .order-list {
      background-color: #fff;
      border-bottom: 1px solid #d5d9d9;
      margin-bottom: 24px;
      border-radius: 8px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 16%);
  
      .order-list-header {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding: 18px;
        margin-bottom: 18px;
        display: flex;
        background-color: #f0f2f2;
        border-bottom: 1px solid #d5d9d9;
        .data-title {
          font-weight: 300;
        }
        .data-title,
        .data-value {
          display: block;
          margin-bottom: 8px;
        }
        .data-value {
          margin-bottom: 0;
        }
        &-data {
          display: flex;
          text-align: left;
          > div {
            padding-right: 24px;
          }
        }
      }
  
      .order-list-data {
        li {
          display: flex;
          padding-left: 18px;
          padding-right: 18px;
          padding-bottom: 8px;
          margin-bottom: 8px;
          .line-item-image {
            flex: 1 0 100px;
            max-width: 100px;
            width: 100px;
            height: 100px;
          }
          span:last-child {
            margin-left: 18px;
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  
  }
  