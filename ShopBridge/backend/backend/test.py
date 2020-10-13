from rest_framework.test import APITestCase
from inventory.models import Inventory


class ItemsAPI_testcase(APITestCase):
    def setUp(self):
        Inventory.objects.create(name='book', description='long textbook', price=100)

    def test_get_method(self):
        url = 'http://127.0.0.1/api/inventory/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        qs = Inventory.objects.filter(name='book')
        self.assertEqual(qs.count(), 1)
        print('get method response status code', response.status_code)

    def test_post_method_success(self):
        url = 'http://127.0.0.1/api/inventory/'
        data = {
            'name': "pen",
            'description': "ink pen",
            'price': 100,
        }
        response = self.client.post(url, data, format='json')
        print('post method sucess response status code',response.status_code)
        self.assertEqual(response.status_code, 201)

    def test_post_method_fail(self):
        url = 'http://127.0.0.1/api/inventory/'
        data = {
            'description': 'long textbook',
            'name': 'book',
        }
        response = self.client.post(url, data, format='json')
        print('post method fail response status code',response.status_code)
        self.assertEqual(response.status_code, 400)

    def test_delete_method_success(self):
        url = 'http://127.0.0.1/api/inventory/1/'
        response = self.client.delete(url)
        print('post method fail response status code', response.status_code)
        self.assertEqual(response.status_code, 204)