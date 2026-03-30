from setuptools import setup, find_packages

setup(
    name="emergentintegrations",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        # any dependencies your package needs, e.g.,
        # "requests>=2.31.0"
    ],
    python_requires=">=3.12,<3.13",
)