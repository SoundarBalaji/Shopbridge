from django.test import TestCase
from inventory.models import Inventory
# Create your tests here.
class InventoryTestCase(TestCase):
    def setUp(self):
        print('setup activity')
        Inventory.objects.create(name='book',description='long textbook', price=100)
        Inventory.objects.create(name='pen',description='ink pen', price=70)
    def test_inventory_info(self):
        print('testing inventory info')
        qs=Inventory.objects.all()
        self.assertEqual(qs.count(),2)
        i1=Inventory.objects.get(name='book')
        i2=Inventory.objects.get(name='pen')
        self.assertEqual(i1.price,100)
        self.assertEqual(i2.price, 70)