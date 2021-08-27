"""
    https://github.com/woowa-techcamp-2021/broken_baemin 를 사용합니다.
"""

from broken_baemin import CATEGORIES
import json
import requests
from pprint import pprint


def derive_number_from(krw: str):
    replaced = krw.replace(',', '').replace('원', '')
    return int(replaced)


def handle_category(category: str):
    file_json = open('./data/{}.json'.format(category), 'r', encoding='utf-8')
    products = json.load(file_json)

    for product in products:
        try:
            origin_price = product['originPrice']
            product['originPrice'] = derive_number_from(origin_price)
            discounted_price = product['discountedPrice']
            product['discountedPrice'] = derive_number_from(discounted_price)
            res = requests.post('http://localhost:5000/api/products', json=product)
            print(res.status_code)
        except ValueError:
            continue


if __name__ == '__main__':
    for category in CATEGORIES:
        handle_category(category)
