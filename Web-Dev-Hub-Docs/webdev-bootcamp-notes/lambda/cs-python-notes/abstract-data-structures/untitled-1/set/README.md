# Set

## Set <a id="ce19"></a>

A [set](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset) object is an unordered collection of distinct hashable objects. It’s one of Python’s built-in types and allows the dynamic adding and removing of elements, iteration, and operations with another set objects.

{% embed url="https://gist.github.com/bgoonz/fd055be6416beeaca6e70c7a759b18fd" %}

```python
"""
Sets are an unordered collection of unique values that can be modified at
runtime. This module shows how sets are created, iterated, accessed,
extended and shortened.
"""


def main():
    # Let's define one `set` for starters
    simple_set = {0, 1, 2}

    # A set is dynamic like a `list` and `tuple`
    simple_set.add(3)
    simple_set.remove(0)
    assert simple_set == {1, 2, 3}

    # Unlike a `list and `tuple`, it is not an ordered sequence as it
    # does not allow duplicates to be added
    for _ in range(5):
        simple_set.add(0)
        simple_set.add(4)
    assert simple_set == {0, 1, 2, 3, 4}

    # Now let's define two new `set` collections
    multiples_two = set()
    multiples_four = set()

    # Fill sensible values into the set using `add`
    for i in range(10):
        multiples_two.add(i * 2)
        multiples_four.add(i * 4)

    # As we can see, both sets have similarities and differences
    assert multiples_two == {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}
    assert multiples_four == {0, 4, 8, 12, 16, 20, 24, 28, 32, 36}

    # We cannot decide in which order the numbers come out - so let's
    # look for fundamental truths instead, such as divisibility against
    # 2 and 4. We do this by checking whether the modulus of 2 and 4
    # yields 0 (i.e. no remainder from performing a division)
    multiples_common = multiples_two.intersection(multiples_four)
    for number in multiples_common:
        assert number % 2 == 0 and number % 4 == 0

    # We can compute exclusive multiples
    multiples_two_exclusive = multiples_two.difference(multiples_four)
    multiples_four_exclusive = multiples_four.difference(multiples_two)
    assert len(multiples_two_exclusive) > 0
    assert len(multiples_four_exclusive) > 0

    # Numbers in this bracket are greater than 2 * 9 and less than 4 * 10
    for number in multiples_four_exclusive:
        assert 18 < number < 40

    # By computing a set union against the two sets, we have all integers
    # in this program
    multiples_all = multiples_two.union(multiples_four)

    # Check if set A is a subset of set B
    assert multiples_four_exclusive.issubset(multiples_four)
    assert multiples_four.issubset(multiples_all)

    # Check if set A is a subset and superset of itself
    assert multiples_all.issubset(multiples_all)
    assert multiples_all.issuperset(multiples_all)

    # Check if set A is a superset of set B
    assert multiples_all.issuperset(multiples_two)
    assert multiples_two.issuperset(multiples_two_exclusive)


if __name__ == "__main__":
    main()

```

{% page-ref page="../array/" %}

{% page-ref page="../binary-search-tree/" %}

{% page-ref page="../untitled-4/" %}

{% page-ref page="../array/extra-array.md" %}

{% page-ref page="../stack/" %}

{% page-ref page="../binary-tree/" %}

{% page-ref page="../untitled-6/" %}

{% page-ref page="../untitled-5/" %}

{% page-ref page="../untitled-2/" %}

{% page-ref page="../untitled-3/" %}

{% page-ref page="../queue/queue-sandbox.md" %}

{% page-ref page="../untitled-5/" %}

{% page-ref page="../untitled-4/double-linked-list.md" %}

{% page-ref page="../untitled-1/" %}

{% page-ref page="../untitled/" %}

{% page-ref page="../heap/" %}
